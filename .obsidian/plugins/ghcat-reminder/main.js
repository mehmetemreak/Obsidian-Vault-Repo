/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  webhookUrl: ""
};
var MyPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.notifiedTasks = /* @__PURE__ */ new Set();
  }
  async onload() {
    await this.loadSettings();
    await this.loadNotifiedTasks();
    this.addSettingTab(new Settingstab(this.app, this));
    this.registerInterval(
      setInterval(
        this.checkAllFilesForTasks.bind(this),
        3 * 60 * 1e3
      )
    );
  }
  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_SETTINGS,
      await this.loadData()
    );
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async loadNotifiedTasks() {
    const savedTasks = await this.loadData();
    if (savedTasks && savedTasks.notifiedTasks) {
      this.notifiedTasks = new Set(savedTasks.notifiedTasks);
    }
  }
  async saveNotifiedTasks() {
    await this.saveData({ notifiedTasks: [...this.notifiedTasks] });
  }
  async checkAllFilesForTasks() {
    const files = this.app.vault.getMarkdownFiles();
    for (const file of files) {
      const fileContent = await this.app.vault.read(file);
      this.checkContentForTasks(fileContent);
    }
  }
  checkContentForTasks(content) {
    const regex = /(.*?)(\(gChat@(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\))/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      let reminderText = match[1].trim();
      if (reminderText.startsWith("- [ ]")) {
        reminderText = reminderText.replace("- [ ]", "").trim();
      }
      const dueDateTime = new Date(match[3]);
      const now = new Date();
      const taskId = `${reminderText}-${match[3]}`;
      if (dueDateTime <= now && !this.notifiedTasks.has(taskId)) {
        this.notifiedTasks.add(taskId);
        this.saveNotifiedTasks();
        this.sendNotification(reminderText, match[3]);
      }
    }
  }
  async sendNotification(reminderText, dateTime) {
    const { webhookUrl } = this.settings;
    if (!webhookUrl || webhookUrl.trim() === "") {
      console.warn(
        "GChat webhook URL is not set. Notification is not sent."
      );
      return;
    }
    const payload = {
      thread: {
        threadKey: `${reminderText}-${dateTime}`
      },
      cardsV2: [
        {
          cardId: `${reminderText}-${dateTime}`,
          card: {
            header: {
              title: "Obsdian",
              subtitle: "Task is due!",
              imageUrl: "https://obsidian.md/images/2023-06-logo.png",
              imageType: "CIRCLE"
            },
            sections: [
              {
                header: dateTime,
                widgets: [
                  {
                    textParagraph: {
                      text: reminderText
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    };
    try {
      const response = await fetch(
        `${webhookUrl}&messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );
      if (!response.ok) {
        console.error(
          "Error sending Google Chat Notifcation:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending Google Chat Notifcation:", error);
    }
  }
};
var Settingstab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Webhook-URL").setDesc("URL to which the notifications are sent").addText(
      (text) => text.setPlaceholder("Enter your URL").setValue(this.plugin.settings.webhookUrl).onChange(async (value) => {
        this.plugin.settings.webhookUrl = value;
        await this.plugin.saveSettings();
      })
    );
  }
};

/* nosourcemap */