import { std } from "wow/wotlk"

// ============================================================================
// Frost Mage Talent Tree - Original Tree
// TalentTab ID: 61
// ============================================================================

// Get the Mage class
const MAGE_CLASS = std.Classes.load("MAGE")

// Get the Frost talent tree (index 2)
 const FROST_TALENT_TREE = MAGE_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Frost tree
const existingTalents = FROST_TALENT_TREE.Talents.get()
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

// Frostbite - Row 0, Column 0
 const FROSTBITE = FROST_TALENT_TREE.Talents
    .addGet("default", "frostbite")
    .Position.set(0, 0)

FROSTBITE.Spells.add([11071, 12496, 12497]) // 3 ranks

// Improved Frostbolt - Row 0, Column 1
 const IMPROVED_FROSTBOLT = FROST_TALENT_TREE.Talents
    .addGet("default", "improved-frostbolt")
    .Position.set(0, 1)

IMPROVED_FROSTBOLT.Spells.add([11070, 12473, 16763, 16765, 16766]) // 5 ranks

// Ice Floes - Row 0, Column 2
 const ICE_FLOES = FROST_TALENT_TREE.Talents
    .addGet("default", "ice-floes")
    .Position.set(0, 2)

ICE_FLOES.Spells.add([31670, 31672, 55094]) // 3 ranks


// Row 1 (Tier 2)
// ============================================================================

// Ice Shards - Row 1, Column 0
 const ICE_SHARDS = FROST_TALENT_TREE.Talents
    .addGet("default", "ice-shards")
    .Position.set(1, 0)

ICE_SHARDS.Spells.add([11207, 12672, 15047]) // 3 ranks

// Frost Warding - Row 1, Column 1
 const FROST_WARDING = FROST_TALENT_TREE.Talents
    .addGet("default", "frost-warding")
    .Position.set(1, 1)

FROST_WARDING.Spells.add([11189, 28332]) // 2 ranks

// Precision - Row 1, Column 2
 const MAGE_PRECISION = FROST_TALENT_TREE.Talents
    .addGet("default", "MAGE_precision")
    .Position.set(1, 2)

MAGE_PRECISION.Spells.add([29438, 29439, 29440]) // 3 ranks

// Permafrost - Row 1, Column 3
 const PERMAFROST = FROST_TALENT_TREE.Talents
    .addGet("default", "permafrost")
    .Position.set(1, 3)

PERMAFROST.Spells.add([11175, 12569, 12571]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Piercing Ice - Row 2, Column 0
 const PIERCING_ICE = FROST_TALENT_TREE.Talents
    .addGet("default", "piercing-ice")
    .Position.set(2, 0)

PIERCING_ICE.Spells.add([11151, 12952, 12953]) // 3 ranks

// Icy Veins - Row 2, Column 1
 const ICY_VEINS = FROST_TALENT_TREE.Talents
    .addGet("default", "icy-veins")
    .Position.set(2, 1)

ICY_VEINS.Spells.add([12472]) // 1 rank

// Improved Blizzard - Row 2, Column 2
 const IMPROVED_BLIZZARD = FROST_TALENT_TREE.Talents
    .addGet("default", "improved-blizzard")
    .Position.set(2, 2)

IMPROVED_BLIZZARD.Spells.add([11185, 12487, 12488]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Arctic Reach - Row 3, Column 0
 const ARCTIC_REACH = FROST_TALENT_TREE.Talents
    .addGet("default", "arctic-reach")
    .Position.set(3, 0)

ARCTIC_REACH.Spells.add([16757, 16758]) // 2 ranks

// Frost Channeling - Row 3, Column 1
 const FROST_CHANNELING = FROST_TALENT_TREE.Talents
    .addGet("default", "frost-channeling")
    .Position.set(3, 1)

FROST_CHANNELING.Spells.add([11160, 12518, 12519]) // 3 ranks

// Shatter - Row 3, Column 2
 const SHATTER = FROST_TALENT_TREE.Talents
    .addGet("default", "shatter")
    .Position.set(3, 2)

SHATTER.Spells.add([11170, 12982, 12983]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Cold Snap - Row 4, Column 1
 const COLD_SNAP = FROST_TALENT_TREE.Talents
    .addGet("default", "cold-snap")
    .Position.set(4, 1)

COLD_SNAP.Spells.add([11958]) // 1 rank

// Improved Cone of Cold - Row 4, Column 2
 const IMPROVED_CONE_OF_COLD = FROST_TALENT_TREE.Talents
    .addGet("default", "improved-cone-of-cold")
    .Position.set(4, 2)

IMPROVED_CONE_OF_COLD.Spells.add([11190, 12489, 12490]) // 3 ranks

// Frozen Core - Row 4, Column 3
 const FROZEN_CORE = FROST_TALENT_TREE.Talents
    .addGet("default", "frozen-core")
    .Position.set(4, 3)

FROZEN_CORE.Spells.add([31667, 31668, 31669]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Cold as Ice - Row 5, Column 0
 const COLD_AS_ICE = FROST_TALENT_TREE.Talents
    .addGet("default", "cold-as-ice")
    .Position.set(5, 0)
    .Requirements.add(COLD_SNAP.ID, 1)

COLD_AS_ICE.Spells.add([55091, 55092]) // 2 ranks

// Winter's Chill - Row 5, Column 2
 const WINTER_S_CHILL = FROST_TALENT_TREE.Talents
    .addGet("default", "winter-s-chill")
    .Position.set(5, 2)

WINTER_S_CHILL.Spells.add([11180, 28592, 28593]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Shattered Barrier - Row 6, Column 0
 const SHATTERED_BARRIER = FROST_TALENT_TREE.Talents
    .addGet("default", "shattered-barrier")
    .Position.set(6, 0)
    .Requirements.add(ICY_VEINS.ID, 1)

SHATTERED_BARRIER.Spells.add([44745, 54787]) // 2 ranks

// Ice Barrier - Row 6, Column 1
 const ICE_BARRIER = FROST_TALENT_TREE.Talents
    .addGet("default", "ice-barrier")
    .Position.set(6, 1)
    .Requirements.add(COLD_SNAP.ID, 1)

ICE_BARRIER.Spells.add([11426]) // 1 rank

// Arctic Winds - Row 6, Column 2
 const ARCTIC_WINDS = FROST_TALENT_TREE.Talents
    .addGet("default", "arctic-winds")
    .Position.set(6, 2)

ARCTIC_WINDS.Spells.add([31674, 31675, 31676, 31677, 31678]) // 5 ranks


// Row 7 (Tier 8)
// ============================================================================

// Empowered Frostbolt - Row 7, Column 1
 const EMPOWERED_FROSTBOLT = FROST_TALENT_TREE.Talents
    .addGet("default", "empowered-frostbolt")
    .Position.set(7, 1)

EMPOWERED_FROSTBOLT.Spells.add([31682, 31683]) // 2 ranks

// Fingers of Frost - Row 7, Column 2
 const FINGERS_OF_FROST = FROST_TALENT_TREE.Talents
    .addGet("default", "fingers-of-frost")
    .Position.set(7, 2)

FINGERS_OF_FROST.Spells.add([44543, 44545]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Brain Freeze - Row 8, Column 0
 const BRAIN_FREEZE = FROST_TALENT_TREE.Talents
    .addGet("default", "brain-freeze")
    .Position.set(8, 0)

BRAIN_FREEZE.Spells.add([44546, 44548, 44549]) // 3 ranks

// Summon Water Elemental - Row 8, Column 1
 const SUMMON_WATER_ELEMENTAL = FROST_TALENT_TREE.Talents
    .addGet("default", "summon-water-elemental")
    .Position.set(8, 1)

SUMMON_WATER_ELEMENTAL.Spells.add([31687]) // 1 rank

// Enduring Winter - Row 8, Column 2
 const ENDURING_WINTER = FROST_TALENT_TREE.Talents
    .addGet("default", "enduring-winter")
    .Position.set(8, 2)
    .Requirements.add(SUMMON_WATER_ELEMENTAL.ID, 1)

ENDURING_WINTER.Spells.add([44557, 44560, 44561]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Chilled to the Bone - Row 9, Column 1
 const CHILLED_TO_THE_BONE = FROST_TALENT_TREE.Talents
    .addGet("default", "chilled-to-the-bone")
    .Position.set(9, 1)

CHILLED_TO_THE_BONE.Spells.add([44566, 44567, 44568, 44570, 44571]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Deep Freeze - Row 10, Column 1
 const DEEP_FREEZE = FROST_TALENT_TREE.Talents
    .addGet("default", "deep-freeze")
    .Position.set(10, 1)

DEEP_FREEZE.Spells.add([44572]) // 1 rank