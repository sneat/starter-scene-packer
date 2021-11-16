![GitHub Releases](https://img.shields.io/github/downloads/sneat/starter-scene-packer/latest/total) ![GitHub Releases](https://img.shields.io/github/downloads/sneat/starter-scene-packer/total)

# Starter module for using Scene Packer

This module can be used as a starting point when creating your own Foundry VTT Module that utilises the features supported by [Library: Scene Packer](https://github.com/League-of-Foundry-Developers/scene-packer).

Make use of this module if you are new to making [Foundry VTT modules](https://foundryvtt.com/article/module-development/) and want a jump-start. You should still have a read over the [official documentation](https://foundryvtt.com/article/module-development/) on how to create a module as it will give you a lot of helpful background knowledge.

## How to use

Just head on over to https://sneat.github.io/scene-packer-module-generator/ and fill in the appropriate fields. This repository forms the basis of the module that gets downloaded from https://sneat.github.io/scene-packer-module-generator/

Alternatively, if you want to do it manually...

Follow these steps to convert `starter-scene-packer` into your very own module compatible with [Scene Packer](https://github.com/League-of-Foundry-Developers/scene-packer).

If you get stuck at any stage, feel free to stop by the [<img src="https://github.com/League-of-Foundry-Developers/scene-packer/raw/main/assets/icons/hand-truck.png" alt="icon" height="24" valign="middle">
Scene Packer discord server](https://discord.com/invite/HY3xhBEf2A) and discuss with `blair#9056` there. Do not paste your module.json file into the Discord server. 

Recommended pre-steps:

1. Develop against a local instance of [Foundry VTT](https://foundryvtt.com/).
    - You can download an appropriate version from the Purchased License section.
    - See the official documentation for information on [downloading and installing](https://foundryvtt.com/article/installation/) Foundry VTT.
2. If you have never done any coding before or are looking for something to open `json` and `js` files with, [Visual Studio Code](https://code.visualstudio.com/Download) is a free code editor that has a lot of good functionality.

The process:

1. Download the `starter-scene-packer.zip` file from: https://github.com/sneat/starter-scene-packer/releases/latest
2. Extract the zip file and put the `starter-scene-packer` folder into your Foundry VTT `Data/modules/` folder.
    - See [Where is my data stored?](https://foundryvtt.com/article/configuration/#where-user-data) for where this is by default.
    - On Windows by default, you should then have a folder structure like:
        - `%localappdata%/FoundryVTT/Data/modules/starter-scene-packer`
        - For example: `c:\Users\blairm\AppData\local\FoundryVTT\Data\modules\starter-scene-packer`
3. Rename the `starter-scene-packer` folder to your `unique module identifier`. This must be all lower-case, have no special characters and use hyphens (not underscores) to seperate terms (don't use spaces). See the `name` section of [Required Manifest Attributes](https://foundryvtt.com/article/module-development/#requirements) for full details.
    - Future references to this folder will be `your-module-folder`.
4. As an aside, if you are new to editing code, consider opening `your-module-folder` within VS Code as a [workspace](https://code.visualstudio.com/docs/editor/workspaces#_singlefolder-workspaces).
5. Edit the `module.json` file within your newly renamed `your-module-folder` to replace the example references with your own. Refer to the [official documentation](https://foundryvtt.com/article/module-development/#requirements) for full details.
    1. `name` - This **must** be the same as the folder name (e.g. `your-module-folder`).
    2. `title` - This is the name that end-users will see within Foundry VTT, primarily within the Settings menu where they will enable your module.
    3. `description` - This is the description of your module, primarily seen within the Settings menu where they will enable your module.
    4. `version` - Keep this at `1.0.0` for now. Use this field when you release new versions or updates (fixing typos etc.). If you update it in the future, it is recommended to increment the "patch" portion such as `1.0.1`, followed by `1.0.2` etc. (see [Semantic Versioning](https://semver.org/) for additional information).
    5. `author` and `authors` - Update these with your details and delete any that don't apply. See [Authors](https://foundryvtt.wiki/en/development/manifest-plus#authors) on the Foundry VTT Wiki for supported options.
    6. `media` - Update these values if possible, following the [Media guide](https://foundryvtt.wiki/en/development/manifest-plus#media) on the Foundry VTT Wiki. If you don't have any media, delete the `media` block.
    7. `packs` - These are the compendium packs within your module. For each of them, change the `label` value to whatever you want. The value you set here your end users will see in the `Compendium` tab within Foundry VTT.
    8. `url` - Change to whatever URL is appropriate for you. This might be your Patreon page, or your website or anything else.
    9. `manifest` - Leave this for now. We will change it later.
    10. `download` - Leave this for now. We will change it later.
6. Validate your `module.json` file. There are lots of websites that you can use to validate the file, one of which is https://jsonlint.com/ 
7. Edit the `scripts/init.js` file within `your-module-folder`
    1. Change the value of `adventureName` to whatever name you would like Scene Packer to refer to your module as during dialogs and when creating folders. This is likely to be the same as the `title` field within the `module.json` file.
    2. Change the value of `moduleName` to be *exactly* the same as the `name` field within the `module.json` file. This is also the same name as the module folder (e.g. `your-module-folder`).
    3. The rest of the values you can modify in this file have comments describing what they represent and how to disable them. If any of these are confusing, please reach out to `blair#9056` on the [<img src="https://github.com/League-of-Foundry-Developers/scene-packer/raw/main/assets/icons/hand-truck.png" alt="icon" height="24" valign="middle">
       Scene Packer discord server](https://discord.com/invite/HY3xhBEf2A) so that the descriptions can be improved.
8. Make sure you have saved both the `your-module-folder/module.json` and `your-module-folder/scripts/init.js` files.
9. Launch your Foundry VTT development instance.
    - You should see your module listed in the `Add-on Modules` tab of the Setup screen. If you don't see it listed, jump on the [<img src="https://github.com/League-of-Foundry-Developers/scene-packer/raw/main/assets/icons/hand-truck.png" alt="icon" height="24" valign="middle">
      Scene Packer discord server](https://discord.com/invite/HY3xhBEf2A) for some assitance.
    - If you haven't already installed it, install the `Library: Scene Packer` module from the `Install Module` button.
    - The `libWrapper` module is a recommended module to also install.
10. Enable your module in your world and start following the `Usage as a Content Creator` steps that are bundled in the Scene Packer compendium journals.

## Help!

Join the [<img src="https://github.com/League-of-Foundry-Developers/scene-packer/raw/main/assets/icons/hand-truck.png" alt="icon" height="24" valign="middle">
Scene Packer discord server](https://discord.com/invite/HY3xhBEf2A) for assistance.

## Saying thanks

If you found this helpful in getting you up and running, consider buying me a coffee, or jumping on the Scene Packer discord server and saying hello.

[![Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dblairm%26type%3Dpatrons&style=for-the-badge)](https://www.patreon.com/blairm)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A0488MI)
