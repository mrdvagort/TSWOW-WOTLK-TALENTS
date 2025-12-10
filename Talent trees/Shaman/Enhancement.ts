import { std } from "wow/wotlk"

// ============================================================================
// Enhancement Shaman Talent Tree - Original Tree
// TalentTab ID: 263
// ============================================================================

// Get the Shaman class
const SHAMAN_CLASS = std.Classes.load("SHAMAN")

// Get the Enhancement talent tree (index 1)
 const ENHANCEMENT_TALENT_TREE = SHAMAN_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Enhancement tree
const existingTalents = ENHANCEMENT_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// PASTE PRINTER OUTPUT BELOW THIS LINE
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Enhancing Totems - Row 0, Column 0
 const ENHANCING_TOTEMS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "enhancing-totems")
    .Position.set(0, 0)

ENHANCING_TOTEMS.Spells.add([16259, 16295, 52456]) // 3 ranks

// Earth's Grasp - Row 0, Column 1
 const EARTH_S_GRASP = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "earth-s-grasp")
    .Position.set(0, 1)

EARTH_S_GRASP.Spells.add([16043, 16130]) // 2 ranks

// Ancestral Knowledge - Row 0, Column 2
 const ANCESTRAL_KNOWLEDGE = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "ancestral-knowledge")
    .Position.set(0, 2)

ANCESTRAL_KNOWLEDGE.Spells.add([17485, 17486, 17487, 17488, 17489]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Guardian Totems - Row 1, Column 0
 const GUARDIAN_TOTEMS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "guardian-totems")
    .Position.set(1, 0)

GUARDIAN_TOTEMS.Spells.add([16258, 16293]) // 2 ranks

// Thundering Strikes - Row 1, Column 1
 const THUNDERING_STRIKES = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "thundering-strikes")
    .Position.set(1, 1)

THUNDERING_STRIKES.Spells.add([16255, 16302, 16303, 16304, 16305]) // 5 ranks

// Improved Ghost Wolf - Row 1, Column 2
 const IMPROVED_GHOST_WOLF = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "improved-ghost-wolf")
    .Position.set(1, 2)

IMPROVED_GHOST_WOLF.Spells.add([16262, 16287]) // 2 ranks

// Improved Shields - Row 1, Column 3
 const IMPROVED_SHIELDS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "improved-shields")
    .Position.set(1, 3)

IMPROVED_SHIELDS.Spells.add([16261, 16290, 51881]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Elemental Weapons - Row 2, Column 0
 const ELEMENTAL_WEAPONS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "elemental-weapons")
    .Position.set(2, 0)

ELEMENTAL_WEAPONS.Spells.add([16266, 29079, 29080]) // 3 ranks

// Shamanistic Focus - Row 2, Column 2
 const SHAMANISTIC_FOCUS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "shamanistic-focus")
    .Position.set(2, 2)

SHAMANISTIC_FOCUS.Spells.add([43338]) // 1 rank

// Anticipation - Row 2, Column 3
 const ANTICIPATION = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "anticipation")
    .Position.set(2, 3)

ANTICIPATION.Spells.add([16254, 16271, 16272]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Flurry - Row 3, Column 1
 const FLURRY = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "flurry")
    .Position.set(3, 1)
    .Requirements.add(THUNDERING_STRIKES.ID, 5)

FLURRY.Spells.add([16256, 16281, 16282, 16283, 16284]) // 5 ranks

// Toughness - Row 3, Column 2
 const TOUGHNESS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "toughness")
    .Position.set(3, 2)

TOUGHNESS.Spells.add([16252, 16306, 16307, 16308, 16309]) // 5 ranks


// Row 4 (Tier 5)
// ============================================================================

// Improved Windfury Totem - Row 4, Column 0
 const IMPROVED_WINDFURY_TOTEM = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "improved-windfury-totem")
    .Position.set(4, 0)

IMPROVED_WINDFURY_TOTEM.Spells.add([29192, 29193]) // 2 ranks

// Spirit Weapons - Row 4, Column 1
 const SPIRIT_WEAPONS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "spirit-weapons")
    .Position.set(4, 1)

SPIRIT_WEAPONS.Spells.add([16268]) // 1 rank

// Mental Dexterity - Row 4, Column 2
 const MENTAL_DEXTERITY = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "mental-dexterity")
    .Position.set(4, 2)

MENTAL_DEXTERITY.Spells.add([51883, 51884, 51885]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Unleashed Rage - Row 5, Column 0
 const UNLEASHED_RAGE = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "unleashed-rage")
    .Position.set(5, 0)

UNLEASHED_RAGE.Spells.add([30802, 30808, 30809]) // 3 ranks

// Weapon Mastery - Row 5, Column 2
 const Enhancement_WEAPON_MASTERY = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "Enhancement_weapon-mastery")
    .Position.set(5, 2)

Enhancement_WEAPON_MASTERY.Spells.add([29082, 29084, 29086]) // 3 ranks

// Frozen Power - Row 5, Column 3
 const FROZEN_POWER = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "frozen-power")
    .Position.set(5, 3)

FROZEN_POWER.Spells.add([63373, 63374]) // 2 ranks


// Row 6 (Tier 7)
// ============================================================================


// Dual Wield - Row 6, Column 1
 const DUAL_WIELD = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "dual-wield")
    .Position.set(6, 1)
    .Requirements.add(SPIRIT_WEAPONS.ID, 1)

DUAL_WIELD.Spells.add([30798]) // 1 rank

// Dual Wield Specialization - Row 6, Column 0
// The 2 First talents are rotated, due to definition order in the SCRIPT.
 const Enhancement_DUAL_WIELD_SPECIALIZATION = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "Enhancement_dual-wield-specialization")
    .Position.set(6, 0)
    .Requirements.add(DUAL_WIELD.ID, 1)

Enhancement_DUAL_WIELD_SPECIALIZATION.Spells.add([30816, 30818, 30819]) // 3 ranks


// Stormstrike - Row 6, Column 2
 const STORMSTRIKE = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "stormstrike")
    .Position.set(6, 2)

STORMSTRIKE.Spells.add([17364]) // 1 rank


// Row 7 (Tier 8)
// ============================================================================

// Static Shock - Row 7, Column 0
 const STATIC_SHOCK = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "static-shock")
    .Position.set(7, 0)

STATIC_SHOCK.Spells.add([51525, 51526, 51527]) // 3 ranks

// Lava Lash - Row 7, Column 1
 const LAVA_LASH = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "lava-lash")
    .Position.set(7, 1)
    .Requirements.add(DUAL_WIELD.ID, 1)

LAVA_LASH.Spells.add([60103]) // 1 rank

// Improved Stormstrike - Row 7, Column 2
 const IMPROVED_STORMSTRIKE = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "improved-stormstrike")
    .Position.set(7, 2)
    .Requirements.add(STORMSTRIKE.ID, 1)

IMPROVED_STORMSTRIKE.Spells.add([51521, 51522]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Mental Quickness - Row 8, Column 0
 const MENTAL_QUICKNESS = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "mental-quickness")
    .Position.set(8, 0)

MENTAL_QUICKNESS.Spells.add([30812, 30813, 30814]) // 3 ranks

// Shamanistic Rage - Row 8, Column 1
 const SHAMANISTIC_RAGE = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "shamanistic-rage")
    .Position.set(8, 1)

SHAMANISTIC_RAGE.Spells.add([30823]) // 1 rank

// Earthen Power - Row 8, Column 2
 const EARTHEN_POWER = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "earthen-power")
    .Position.set(8, 2)

EARTHEN_POWER.Spells.add([51523, 51524]) // 2 ranks


// Row 9 (Tier 10)
// ============================================================================

// Maelstrom Weapon - Row 9, Column 1
 const MAELSTROM_WEAPON = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "maelstrom-weapon")
    .Position.set(9, 1)

MAELSTROM_WEAPON.Spells.add([51528, 51529, 51530, 51531, 51532]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Feral Spirit - Row 10, Column 1
 const FERAL_SPIRIT = ENHANCEMENT_TALENT_TREE.Talents
    .addGet("default", "feral-spirit")
    .Position.set(10, 1)

FERAL_SPIRIT.Spells.add([51533]) // 1 rank