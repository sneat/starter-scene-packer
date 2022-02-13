(() => {
  const adventureName = 'Starter Scene Packer';
  const moduleName = 'starter-scene-packer';

  /**
   * welcomeJournal (if set) will automatically be imported and opened after the first activation of a
   * scene imported from the module compendium.
   * The name here corresponds to a Journal entry in your compendium and must match exactly (it is case
   * sensitive).
   * Set to the following to disable:
   *   const welcomeJournal = '';
   */
  const welcomeJournal = 'Introduction';
  /**
   * additionalJournals will automatically be imported. This is a list of Journals by name that should
   * also be imported.
   * Set to the following to disable:
   *   const additionalJournals = [];
   */
  const additionalJournals = ['Credits'];
  /**
   * additionalMacros will automatically be imported. Each name must match exactly and are case sensitive.
   * Set to the following to disable:
   *   const additionalMacros = [];
   */
  const additionalMacros = ['Example Macro'];
  /**
   * creaturePacks is a list of compendium packs to look in for Actors by name (in prioritised order).
   * If the creature is not found in the first pack, it will search through each subsequent pack.
   * Set to the following to disable:
   *   const creaturePacks = [];
   */
  const creaturePacks = [];
  /**
   * journalPacks is a list of compendium packs to look in for Journals by name (in prioritised order).
   * Set to the following to disable:
   *   const journalPacks = [];
   */
  const journalPacks = [];
  /**
   * macroPacks is a list of compendium packs to look in for Macros by name (in prioritised order).
   * Set to the following to disable:
   *   const macroPacks = [];
   */
  const macroPacks = [];
  /**
   * playlistPacks is a list of compendium packs to look in for Playlists by name (in prioritised order).
   * Set to the following to disable:
   *   const playlistPacks = [];
   */
  const playlistPacks = [];
  /**
   * additionalModulePacks is a list of modules whose compendium packs can be looked in for entities by name (in prioritised order).
   * Enter just the "name" of the module/s or system/s you want to be considered.
   *
   * By default, all packs within your module will be included along with those from the dnd5e system.
   *
   * For example, if you wanted to allow the packs from
   * the [Free Loot Tavern's Magic Item Vault]{@link https://foundryvtt.com/packages/free-loot-tavern-compendium}
   * and [Dynamic Active Effects SRD]{@link https://foundryvtt.com/packages/Dynamic-Effects-SRD}
   * modules to be searchable:
   *   const additionalModulePacks= ['free-loot-tavern-compendium', 'Dynamic-Effects-SRD'];
   *
   * Set to the following to disable:
   *   const additionalModulePacks = [];
   */
  const additionalModulePacks = [moduleName, 'dnd5e'];

  Hooks.once('scenePackerReady', ScenePacker => {
    // Initialise the Scene Packer with your adventure name and module name
    let packer = ScenePacker.Initialise({
      adventureName,
      moduleName,
      creaturePacks,
      journalPacks,
      macroPacks,
      playlistPacks,
      additionalModulePacks,
      welcomeJournal,
      additionalJournals,
      additionalMacros,
      allowImportPrompts: true, // Set to false if you don't want the initial popup
    });
  });
})();
