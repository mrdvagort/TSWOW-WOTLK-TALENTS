import { std } from "wow/wotlk"

// ============================================================================
// ASSASSINATIOON Rogue Talent Tree - Original Tree
// TalentTab ID: 182
// ============================================================================

// Get the Rogue class
const ROGUE_CLASS = std.Classes.load("ROGUE")

// Get the ASSASSINATIOON talent tree (index 1)
 const COMBAT_TALENT_TREE = ROGUE_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the ASSASSINATIOON tree
const existingTalents = COMBAT_TALENT_TREE.Talents.get()
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

// Improved Eviscerate - Row 0, Column 0
 const IMPROVED_EVISCERATE = COMBAT_TALENT_TREE.Talents
    .addGet("default", "improved-eviscerate")
    .Position.set(0, 0)

IMPROVED_EVISCERATE.Spells.add([14162, 14163, 14164]) // 3 ranks

// Remorseless Attacks - Row 0, Column 1
 const REMORSELESS_ATTACKS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "remorseless-attacks")
    .Position.set(0, 1)

REMORSELESS_ATTACKS.Spells.add([14144, 14148]) // 2 ranks

// Malice - Row 0, Column 2
 const MALICE = COMBAT_TALENT_TREE.Talents
    .addGet("default", "malice")
    .Position.set(0, 2)

MALICE.Spells.add([14138, 14139, 14140, 14141, 14142]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Ruthlessness - Row 1, Column 0
 const RUTHLESSNESS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "ruthlessness")
    .Position.set(1, 0)

RUTHLESSNESS.Spells.add([14156, 14160, 14161]) // 3 ranks

// Blood Spatter - Row 1, Column 1
 const BLOOD_SPATTER = COMBAT_TALENT_TREE.Talents
    .addGet("default", "blood-spatter")
    .Position.set(1, 1)

BLOOD_SPATTER.Spells.add([51632, 51633]) // 2 ranks

// Puncturing Wounds - Row 1, Column 3
 const PUNCTURING_WOUNDS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "puncturing-wounds")
    .Position.set(1, 3)

PUNCTURING_WOUNDS.Spells.add([13733, 13865, 13866]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Vigor - Row 2, Column 0
 const VIGOR = COMBAT_TALENT_TREE.Talents
    .addGet("default", "vigor")
    .Position.set(2, 0)

VIGOR.Spells.add([14983]) // 1 rank

// Improved Expose Armor - Row 2, Column 1
 const IMPROVED_EXPOSE_ARMOR = COMBAT_TALENT_TREE.Talents
    .addGet("default", "improved-expose-armor")
    .Position.set(2, 1)

IMPROVED_EXPOSE_ARMOR.Spells.add([14168, 14169]) // 2 ranks

// Lethality - Row 2, Column 2
 const LETHALITY = COMBAT_TALENT_TREE.Talents
    .addGet("default", "lethality")
    .Position.set(2, 2)
    .Requirements.add(MALICE.ID, 5)

LETHALITY.Spells.add([14128, 14132, 14135, 14136, 14137]) // 5 ranks


// Row 3 (Tier 4)
// ============================================================================

// Vile Poisons - Row 3, Column 1
 const VILE_POISONS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "vile-poisons")
    .Position.set(3, 1)

VILE_POISONS.Spells.add([16513, 16514, 16515]) // 3 ranks

// Improved Poisons - Row 3, Column 2
 const IMPROVED_POISONS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "improved-poisons")
    .Position.set(3, 2)

IMPROVED_POISONS.Spells.add([14113, 14114, 14115, 14116, 14117]) // 5 ranks


// Row 4 (Tier 5)
// ============================================================================

// Fleet Footed - Row 4, Column 0
 const FLEET_FOOTED = COMBAT_TALENT_TREE.Talents
    .addGet("default", "fleet-footed")
    .Position.set(4, 0)

FLEET_FOOTED.Spells.add([31208, 31209]) // 2 ranks

// Cold Blood - Row 4, Column 1
 const COLD_BLOOD = COMBAT_TALENT_TREE.Talents
    .addGet("default", "cold-blood")
    .Position.set(4, 1)

COLD_BLOOD.Spells.add([14177]) // 1 rank

// Improved Kidney Shot - Row 4, Column 2
 const IMPROVED_KIDNEY_SHOT = COMBAT_TALENT_TREE.Talents
    .addGet("default", "improved-kidney-shot")
    .Position.set(4, 2)

IMPROVED_KIDNEY_SHOT.Spells.add([14174, 14175, 14176]) // 3 ranks

// Quick Recovery - Row 4, Column 3
 const QUICK_RECOVERY = COMBAT_TALENT_TREE.Talents
    .addGet("default", "quick-recovery")
    .Position.set(4, 3)

QUICK_RECOVERY.Spells.add([31244, 31245]) // 2 ranks


// Row 5 (Tier 6)
// ============================================================================

// Seal Fate - Row 5, Column 1
 const SEAL_FATE = COMBAT_TALENT_TREE.Talents
    .addGet("default", "seal-fate")
    .Position.set(5, 1)

SEAL_FATE.Spells.add([14186, 14190, 14193, 14194, 14195]) // 5 ranks

// Murder - Row 5, Column 2
 const MURDER = COMBAT_TALENT_TREE.Talents
    .addGet("default", "murder")
    .Position.set(5, 2)

MURDER.Spells.add([14158, 14159]) // 2 ranks


// Row 6 (Tier 7)
// ============================================================================

// Deadly Brew - Row 6, Column 0
 const DEADLY_BREW = COMBAT_TALENT_TREE.Talents
    .addGet("default", "deadly-brew")
    .Position.set(6, 0)

DEADLY_BREW.Spells.add([51625, 51626]) // 2 ranks

// Overkill - Row 6, Column 1
 const OVERKILL = COMBAT_TALENT_TREE.Talents
    .addGet("default", "overkill")
    .Position.set(6, 1)

OVERKILL.Spells.add([58426]) // 1 rank

// Deadened Nerves - Row 6, Column 2
 const DEADENED_NERVES = COMBAT_TALENT_TREE.Talents
    .addGet("default", "deadened-nerves")
    .Position.set(6, 2)

DEADENED_NERVES.Spells.add([31380, 31382, 31383]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Focused Attacks - Row 7, Column 0
 const FOCUSED_ATTACKS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "focused-attacks")
    .Position.set(7, 0)

FOCUSED_ATTACKS.Spells.add([51634, 51635, 51636]) // 3 ranks

// Find Weakness - Row 7, Column 2
 const FIND_WEAKNESS = COMBAT_TALENT_TREE.Talents
    .addGet("default", "find-weakness")
    .Position.set(7, 2)

FIND_WEAKNESS.Spells.add([31234, 31235, 31236]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Master Poisoner - Row 8, Column 0
 const MASTER_POISONER = COMBAT_TALENT_TREE.Talents
    .addGet("default", "master-poisoner")
    .Position.set(8, 0)

MASTER_POISONER.Spells.add([31226, 31227, 58410]) // 3 ranks

// Mutilate - Row 8, Column 1
 const MUTILATE = COMBAT_TALENT_TREE.Talents
    .addGet("default", "mutilate")
    .Position.set(8, 1)
    .Requirements.add(OVERKILL.ID, 1)

MUTILATE.Spells.add([1329]) // 1 rank

// Turn the Tables - Row 8, Column 2
 const TURN_THE_TABLES = COMBAT_TALENT_TREE.Talents
    .addGet("default", "turn-the-tables")
    .Position.set(8, 2)

TURN_THE_TABLES.Spells.add([51627, 51628, 51629]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Cut to the Chase - Row 9, Column 1
 const CUT_TO_THE_CHASE = COMBAT_TALENT_TREE.Talents
    .addGet("default", "cut-to-the-chase")
    .Position.set(9, 1)

CUT_TO_THE_CHASE.Spells.add([51664, 51665, 51667, 51668, 51669]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Hunger For Blood - Row 10, Column 1
 const HUNGER_FOR_BLOOD = COMBAT_TALENT_TREE.Talents
    .addGet("default", "hunger-for-blood")
    .Position.set(10, 1)

HUNGER_FOR_BLOOD.Spells.add([51662]) // 1 rank
