import { SQL, std } from "wow/wotlk"

// ============================================================================
// Elemental Shaman Talent Tree - Original Tree
// TalentTab ID: 261
// ============================================================================

// Get the Shaman class
const SHAMAN_CLASS_CLASS = std.Classes.load("SHAMAN")

// Get the original Arms talent tree (index 0)
export const Elemental_TALENT_TREE = SHAMAN_CLASS_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Arms tree
const existingTalents = Elemental_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// Row 0 (Tier 1)
// ============================================================================

// Convection - Row 0, Column 1
export const CONVECTION = Elemental_TALENT_TREE.Talents
    .addGet("default", "convection")
    .Position.set(0, 1)

CONVECTION.Spells.add([16039, 16109, 16110, 16111, 16112]) // 5 ranks

// Concussion - Row 0, Column 2
export const CONCUSSION = Elemental_TALENT_TREE.Talents
    .addGet("default", "concussion")
    .Position.set(0, 2)

CONCUSSION.Spells.add([16035, 16105, 16106, 16107, 16108]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Call of Flame - Row 1, Column 0
export const CALL_OF_FLAME = Elemental_TALENT_TREE.Talents
    .addGet("default", "call-of-flame")
    .Position.set(1, 0)

CALL_OF_FLAME.Spells.add([16038, 16160, 16161]) // 3 ranks

// Elemental Warding - Row 1, Column 1
export const ELEMENTAL_WARDING = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-warding")
    .Position.set(1, 1)

ELEMENTAL_WARDING.Spells.add([28996, 28997, 28998]) // 3 ranks

// Elemental Devastation - Row 1, Column 2
export const ELEMENTAL_DEVASTATION = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-devastation")
    .Position.set(1, 2)

ELEMENTAL_DEVASTATION.Spells.add([30160, 29179, 29180]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Reverberation - Row 2, Column 0
export const REVERBERATION = Elemental_TALENT_TREE.Talents
    .addGet("default", "reverberation")
    .Position.set(2, 0)

REVERBERATION.Spells.add([16040, 16113, 16114, 16115, 16116]) // 5 ranks

// Elemental Focus - Row 2, Column 1
export const ELEMENTAL_FOCUS = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-focus")
    .Position.set(2, 1)

ELEMENTAL_FOCUS.Spells.add([16164]) // 1 rank

// Elemental Fury - Row 2, Column 2
export const ELEMENTAL_FURY = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-fury")
    .Position.set(2, 2)

ELEMENTAL_FURY.Spells.add([16089, 60184, 60185, 60187, 60188]) // 5 ranks


// Row 3 (Tier 4)
// ============================================================================

// Improved Fire Nova - Row 3, Column 0
export const IMPROVED_FIRE_NOVA = Elemental_TALENT_TREE.Talents
    .addGet("default", "improved-fire-nova")
    .Position.set(3, 0)

IMPROVED_FIRE_NOVA.Spells.add([16086, 16544]) // 2 ranks

// Eye of the Storm - Row 3, Column 3
export const EYE_OF_THE_STORM = Elemental_TALENT_TREE.Talents
    .addGet("default", "eye-of-the-storm")
    .Position.set(3, 3)

EYE_OF_THE_STORM.Spells.add([29062, 29064, 29065]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Elemental Reach - Row 4, Column 0
export const ELEMENTAL_REACH = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-reach")
    .Position.set(4, 0)

ELEMENTAL_REACH.Spells.add([28999, 29000]) // 2 ranks

// Call of Thunder - Row 4, Column 1
export const CALL_OF_THUNDER = Elemental_TALENT_TREE.Talents
    .addGet("default", "call-of-thunder")
    .Position.set(4, 1)
    .Requirements.add(ELEMENTAL_FOCUS.ID, 1)

CALL_OF_THUNDER.Spells.add([16041]) // 1 rank

// Unrelenting Storm - Row 4, Column 3
export const UNRELENTING_STORM = Elemental_TALENT_TREE.Talents
    .addGet("default", "unrelenting-storm")
    .Position.set(4, 3)

UNRELENTING_STORM.Spells.add([30664, 30665, 30666]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Elemental Precision - Row 5, Column 0
export const ELEMENTAL_PRECISION = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-precision")
    .Position.set(5, 0)

ELEMENTAL_PRECISION.Spells.add([30672, 30673, 30674]) // 3 ranks

// Lightning Mastery - Row 5, Column 2
export const LIGHTNING_MASTERY = Elemental_TALENT_TREE.Talents
    .addGet("default", "lightning-mastery")
    .Position.set(5, 2)
    .Requirements.add(ELEMENTAL_FURY.ID, 5)

LIGHTNING_MASTERY.Spells.add([16578, 16579, 16580, 16581, 16582]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Elemental Mastery - Row 6, Column 1
export const ELEMENTAL_MASTERY = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-mastery")
    .Position.set(6, 1)
    .Requirements.add(CALL_OF_THUNDER.ID, 1)

ELEMENTAL_MASTERY.Spells.add([16166]) // 1 rank

// Storm, Earth and Fire - Row 6, Column 2
export const STORM_EARTH_AND_FIRE = Elemental_TALENT_TREE.Talents
    .addGet("default", "storm-earth-and-fire")
    .Position.set(6, 2)

STORM_EARTH_AND_FIRE.Spells.add([51483, 51485, 51486]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Booming Echoes - Row 7, Column 0
export const BOOMING_ECHOES = Elemental_TALENT_TREE.Talents
    .addGet("default", "booming-echoes")
    .Position.set(7, 0)

BOOMING_ECHOES.Spells.add([63370, 63372]) // 2 ranks

// Elemental Oath - Row 7, Column 1
export const ELEMENTAL_OATH = Elemental_TALENT_TREE.Talents
    .addGet("default", "elemental-oath")
    .Position.set(7, 1)
    .Requirements.add(ELEMENTAL_MASTERY.ID, 1)

ELEMENTAL_OATH.Spells.add([51466, 51470]) // 2 ranks

// Lightning Overload - Row 7, Column 2
export const LIGHTNING_OVERLOAD = Elemental_TALENT_TREE.Talents
    .addGet("default", "lightning-overload")
    .Position.set(7, 2)

LIGHTNING_OVERLOAD.Spells.add([30675, 30678, 30679]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Astral Shift - Row 8, Column 0
export const ASTRAL_SHIFT = Elemental_TALENT_TREE.Talents
    .addGet("default", "astral-shift")
    .Position.set(8, 0)

ASTRAL_SHIFT.Spells.add([51474, 51478, 51479]) // 3 ranks

// Totem of Wrath - Row 8, Column 1
export const TOTEM_OF_WRATH = Elemental_TALENT_TREE.Talents
    .addGet("default", "totem-of-wrath")
    .Position.set(8, 1)

TOTEM_OF_WRATH.Spells.add([30706]) // 1 rank

// Lava Flows - Row 8, Column 2
export const LAVA_FLOWS = Elemental_TALENT_TREE.Talents
    .addGet("default", "lava-flows")
    .Position.set(8, 2)

LAVA_FLOWS.Spells.add([51480, 51481, 51482]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Shamanism - Row 9, Column 1
export const SHAMANISM = Elemental_TALENT_TREE.Talents
    .addGet("default", "shamanism")
    .Position.set(9, 1)

SHAMANISM.Spells.add([62097, 62098, 62099, 62100, 62101]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Thunderstorm - Row 10, Column 1
export const THUNDERSTORM = Elemental_TALENT_TREE.Talents
    .addGet("default", "thunderstorm")
    .Position.set(10, 1)

THUNDERSTORM.Spells.add([51490]) // 1 rank


