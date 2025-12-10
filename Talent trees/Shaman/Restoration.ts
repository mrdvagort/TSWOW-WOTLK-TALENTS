import { SQL, std } from "wow/wotlk"

// ============================================================================
// Restoration Shaman Talent Tree - Original Tree
// TalentTab ID: 262
// ============================================================================

// Get the Warrior class
const SHAMAN_CLASS_CLASS = std.Classes.load("SHAMAN")

// Get the original Arms talent tree (index 0)
export const Restoration_TALENT_TREE = SHAMAN_CLASS_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Arms tree
const existingTalents = Restoration_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})




// Row 0 (Tier 1)
// ============================================================================

// Improved Healing Wave - Row 0, Column 1
export const IMPROVED_HEALING_WAVE = Restoration_TALENT_TREE.Talents
    .addGet("default", "improved-healing-wave")
    .Position.set(0, 1)

IMPROVED_HEALING_WAVE.Spells.add([16182, 16226, 16227, 16228, 16229]) // 5 ranks

// Totemic Focus - Row 0, Column 2
export const TOTEMIC_FOCUS = Restoration_TALENT_TREE.Talents
    .addGet("default", "totemic-focus")
    .Position.set(0, 2)

TOTEMIC_FOCUS.Spells.add([16173, 16222, 16223, 16224, 16225]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Improved Reincarnation - Row 1, Column 0
export const IMPROVED_REINCARNATION = Restoration_TALENT_TREE.Talents
    .addGet("default", "improved-reincarnation")
    .Position.set(1, 0)

IMPROVED_REINCARNATION.Spells.add([16184, 16209]) // 2 ranks

// Healing Grace - Row 1, Column 1
export const HEALING_GRACE = Restoration_TALENT_TREE.Talents
    .addGet("default", "healing-grace")
    .Position.set(1, 1)

HEALING_GRACE.Spells.add([29187, 29189, 29191]) // 3 ranks

// Tidal Focus - Row 1, Column 2
export const TIDAL_FOCUS = Restoration_TALENT_TREE.Talents
    .addGet("default", "tidal-focus")
    .Position.set(1, 2)

TIDAL_FOCUS.Spells.add([16179, 16214, 16215, 16216, 16217]) // 5 ranks


// Row 2 (Tier 3)
// ============================================================================

// Improved Water Shield - Row 2, Column 0
export const IMPROVED_WATER_SHIELD = Restoration_TALENT_TREE.Talents
    .addGet("default", "improved-water-shield")
    .Position.set(2, 0)

IMPROVED_WATER_SHIELD.Spells.add([16180, 16196, 16198]) // 3 ranks

// Healing Focus - Row 2, Column 1
export const SHAMAN_HEALING_FOCUS = Restoration_TALENT_TREE.Talents
    .addGet("default", "shaman-healing-focus")
    .Position.set(2, 1)

SHAMAN_HEALING_FOCUS.Spells.add([16181, 16230, 16232]) // 3 ranks

// Tidal Force - Row 2, Column 2
export const TIDAL_FORCE = Restoration_TALENT_TREE.Talents
    .addGet("default", "tidal-force")
    .Position.set(2, 2)

TIDAL_FORCE.Spells.add([55198]) // 1 rank

// Ancestral Healing - Row 2, Column 3
export const ANCESTRAL_HEALING = Restoration_TALENT_TREE.Talents
    .addGet("default", "ancestral-healing")
    .Position.set(2, 3)

ANCESTRAL_HEALING.Spells.add([16176, 16235, 16240]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Restorative Totems - Row 3, Column 1
export const RESTORATIVE_TOTEMS = Restoration_TALENT_TREE.Talents
    .addGet("default", "restorative-totems")
    .Position.set(3, 1)

RESTORATIVE_TOTEMS.Spells.add([16187, 16205, 16206]) // 3 ranks

// Tidal Mastery - Row 3, Column 2
export const TIDAL_MASTERY = Restoration_TALENT_TREE.Talents
    .addGet("default", "tidal-mastery")
    .Position.set(3, 2)

TIDAL_MASTERY.Spells.add([16194, 16218, 16219, 16220, 16221]) // 5 ranks


// Row 4 (Tier 5)
// ============================================================================

// Healing Way - Row 4, Column 0
export const HEALING_WAY = Restoration_TALENT_TREE.Talents
    .addGet("default", "healing-way")
    .Position.set(4, 0)

HEALING_WAY.Spells.add([29206, 29205, 29202]) // 3 ranks

// Nature's Swiftness - Row 4, Column 2
export const SHAMAN_NATURES_SWIFTNESS = Restoration_TALENT_TREE.Talents
    .addGet("default", "shaman-natures-swiftness")
    .Position.set(4, 2)

SHAMAN_NATURES_SWIFTNESS.Spells.add([16188]) // 1 rank

// Focused Mind - Row 4, Column 3
export const FOCUSED_MIND = Restoration_TALENT_TREE.Talents
    .addGet("default", "focused-mind")
    .Position.set(4, 3)

FOCUSED_MIND.Spells.add([30864, 30865, 30866]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Purification - Row 5, Column 2
export const PURIFICATION = Restoration_TALENT_TREE.Talents
    .addGet("default", "purification")
    .Position.set(5, 2)

PURIFICATION.Spells.add([16178, 16210, 16211, 16212, 16213]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Nature's Guardian - Row 6, Column 0
export const NATURE_S_GUARDIAN = Restoration_TALENT_TREE.Talents
    .addGet("default", "nature-s-guardian")
    .Position.set(6, 0)

NATURE_S_GUARDIAN.Spells.add([30881, 30883, 30884, 30885, 30886]) // 5 ranks

// Mana Tide Totem - Row 6, Column 1
export const MANA_TIDE_TOTEM = Restoration_TALENT_TREE.Talents
    .addGet("default", "mana-tide-totem")
    .Position.set(6, 1)
    .Requirements.add(RESTORATIVE_TOTEMS.ID, 3)

MANA_TIDE_TOTEM.Spells.add([16190]) // 1 rank

// Cleanse Spirit - Row 6, Column 2
export const CLEANSE_SPIRIT = Restoration_TALENT_TREE.Talents
    .addGet("default", "cleanse-spirit")
    .Position.set(6, 2)
    .Requirements.add(PURIFICATION.ID, 5)

CLEANSE_SPIRIT.Spells.add([51886]) // 1 rank


// Row 7 (Tier 8)
// ============================================================================

// Blessing of the Eternals - Row 7, Column 0
export const BLESSING_OF_THE_ETERNALS = Restoration_TALENT_TREE.Talents
    .addGet("default", "blessing-of-the-eternals")
    .Position.set(7, 0)

BLESSING_OF_THE_ETERNALS.Spells.add([51554, 51555]) // 2 ranks

// Improved Chain Heal - Row 7, Column 1
export const IMPROVED_CHAIN_HEAL = Restoration_TALENT_TREE.Talents
    .addGet("default", "improved-chain-heal")
    .Position.set(7, 1)

IMPROVED_CHAIN_HEAL.Spells.add([30872, 30873]) // 2 ranks

// Nature's Blessing - Row 7, Column 2
export const NATURE_S_BLESSING = Restoration_TALENT_TREE.Talents
    .addGet("default", "nature-s-blessing")
    .Position.set(7, 2)

NATURE_S_BLESSING.Spells.add([30867, 30868, 30869]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Ancestral Awakening - Row 8, Column 0
export const ANCESTRAL_AWAKENING = Restoration_TALENT_TREE.Talents
    .addGet("default", "ancestral-awakening")
    .Position.set(8, 0)

ANCESTRAL_AWAKENING.Spells.add([51556, 51557, 51558]) // 3 ranks

// Earth Shield - Row 8, Column 1
export const EARTH_SHIELD = Restoration_TALENT_TREE.Talents
    .addGet("default", "earth-shield")
    .Position.set(8, 1)

EARTH_SHIELD.Spells.add([974]) // 1 rank

// Improved Earth Shield - Row 8, Column 2
export const IMPROVED_EARTH_SHIELD = Restoration_TALENT_TREE.Talents
    .addGet("default", "improved-earth-shield")
    .Position.set(8, 2)

IMPROVED_EARTH_SHIELD.Spells.add([51560, 51561]) // 2 ranks


// Row 9 (Tier 10)
// ============================================================================

// Tidal Waves - Row 9, Column 1
export const TIDAL_WAVES = Restoration_TALENT_TREE.Talents
    .addGet("default", "tidal-waves")
    .Position.set(9, 1)

TIDAL_WAVES.Spells.add([51562, 51563, 51564, 51565, 51566]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Riptide - Row 10, Column 1
export const RIPTIDE = Restoration_TALENT_TREE.Talents
    .addGet("default", "riptide")
    .Position.set(10, 1)

RIPTIDE.Spells.add([61295]) // 1 rank