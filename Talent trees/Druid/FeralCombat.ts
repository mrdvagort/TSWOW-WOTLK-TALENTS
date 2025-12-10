import { std } from "wow/wotlk"

// ============================================================================
// Feral Combat Druid Talent Tree - Original Tree
// TalentTab ID: 281
// ============================================================================

// Get the Druid class
const DRUID_CLASS = std.Classes.load("DRUID")

// Get the Feral Combat talent tree (index 1)
export const FERAL_COMBAT_TALENT_TREE = DRUID_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Feral Combat tree
const existingTalents = FERAL_COMBAT_TALENT_TREE.Talents.get()
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

// Ferocity - Row 0, Column 1
export const FeralCombat_FEROCITY = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "FeralCombat_ferocity")
    .Position.set(0, 1)

FeralCombat_FEROCITY.Spells.add([16934, 16935, 16936, 16937, 16938]) // 5 ranks

// Feral Aggression - Row 0, Column 2
export const FERAL_AGGRESSION = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "feral-aggression")
    .Position.set(0, 2)

FERAL_AGGRESSION.Spells.add([16858, 16859, 16860, 16861, 16862]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Feral Instinct - Row 1, Column 0
export const FERAL_INSTINCT = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "feral-instinct")
    .Position.set(1, 0)

FERAL_INSTINCT.Spells.add([16947, 16948, 16949]) // 3 ranks

// Savage Fury - Row 1, Column 1
export const SAVAGE_FURY = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "savage-fury")
    .Position.set(1, 1)

SAVAGE_FURY.Spells.add([16998, 16999]) // 2 ranks

// Thick Hide - Row 1, Column 2
export const FeralCombat_THICK_HIDE = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "FeralCombat_thick-hide")
    .Position.set(1, 2)

FeralCombat_THICK_HIDE.Spells.add([16929, 16930, 16931]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Feral Swiftness - Row 2, Column 0
export const FERAL_SWIFTNESS = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "feral-swiftness")
    .Position.set(2, 0)

FERAL_SWIFTNESS.Spells.add([17002, 24866]) // 2 ranks

// Survival Instincts - Row 2, Column 1
export const SURVIVAL_INSTINCTS = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "survival-instincts")
    .Position.set(2, 1)

SURVIVAL_INSTINCTS.Spells.add([61336]) // 1 rank

// Sharpened Claws - Row 2, Column 2
export const SHARPENED_CLAWS = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "sharpened-claws")
    .Position.set(2, 2)

SHARPENED_CLAWS.Spells.add([16942, 16943, 16944]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Shredding Attacks - Row 3, Column 0
export const SHREDDING_ATTACKS = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "shredding-attacks")
    .Position.set(3, 0)

SHREDDING_ATTACKS.Spells.add([16966, 16968]) // 2 ranks

// Predatory Strikes - Row 3, Column 1
export const PREDATORY_STRIKES = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "predatory-strikes")
    .Position.set(3, 1)

PREDATORY_STRIKES.Spells.add([16972, 16974, 16975]) // 3 ranks

// Primal Fury - Row 3, Column 2
export const PRIMAL_FURY = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "primal-fury")
    .Position.set(3, 2)
    .Requirements.add(SHARPENED_CLAWS.ID, 3)

PRIMAL_FURY.Spells.add([37116, 37117]) // 2 ranks

// Primal Precision - Row 3, Column 3
export const PRIMAL_PRECISION = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "primal-precision")
    .Position.set(3, 3)
    .Requirements.add(SHARPENED_CLAWS.ID, 3)

PRIMAL_PRECISION.Spells.add([48409, 48410]) // 2 ranks


// Row 4 (Tier 5)
// ============================================================================

// Brutal Impact - Row 4, Column 0
export const BRUTAL_IMPACT = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "brutal-impact")
    .Position.set(4, 0)

BRUTAL_IMPACT.Spells.add([16940, 16941]) // 2 ranks

// Feral Charge - Row 4, Column 2
export const FERAL_CHARGE = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "feral-charge")
    .Position.set(4, 2)

FERAL_CHARGE.Spells.add([49377]) // 1 rank

// Nurturing Instinct - Row 4, Column 3
export const NURTURING_INSTINCT = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "nurturing-instinct")
    .Position.set(4, 3)

NURTURING_INSTINCT.Spells.add([33872, 33873]) // 2 ranks


// Row 5 (Tier 6)
// ============================================================================

// Natural Reaction - Row 5, Column 0
export const NATURAL_REACTION = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "natural-reaction")
    .Position.set(5, 0)

NATURAL_REACTION.Spells.add([57878, 57880, 57881]) // 3 ranks

// Heart of the Wild - Row 5, Column 1
export const HEART_OF_THE_WILD = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "heart-of-the-wild")
    .Position.set(5, 1)
    .Requirements.add(PREDATORY_STRIKES.ID, 3)

HEART_OF_THE_WILD.Spells.add([17003, 17004, 17005, 17006, 24894]) // 5 ranks

// Survival of the Fittest - Row 5, Column 2
export const SURVIVAL_OF_THE_FITTEST = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "survival-of-the-fittest")
    .Position.set(5, 2)

SURVIVAL_OF_THE_FITTEST.Spells.add([33853, 33855, 33856]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Leader of the Pack - Row 6, Column 1
export const LEADER_OF_THE_PACK = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "leader-of-the-pack")
    .Position.set(6, 1)

LEADER_OF_THE_PACK.Spells.add([17007]) // 1 rank

// Improved Leader of the Pack - Row 6, Column 2
export const IMPROVED_LEADER_OF_THE_PACK = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "improved-leader-of-the-pack")
    .Position.set(6, 2)

IMPROVED_LEADER_OF_THE_PACK.Spells.add([34297, 34300]) // 2 ranks

// Primal Tenacity - Row 6, Column 3
export const PRIMAL_TENACITY = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "primal-tenacity")
    .Position.set(6, 3)

PRIMAL_TENACITY.Spells.add([33851, 33852, 33957]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Protector of the Pack - Row 7, Column 0
export const PROTECTOR_OF_THE_PACK = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "protector-of-the-pack")
    .Position.set(7, 0)
    .Requirements.add(LEADER_OF_THE_PACK.ID, 1)

PROTECTOR_OF_THE_PACK.Spells.add([57873, 57876, 57877]) // 3 ranks

// Predatory Instincts - Row 7, Column 2
export const PREDATORY_INSTINCTS = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "predatory-instincts")
    .Position.set(7, 2)

PREDATORY_INSTINCTS.Spells.add([33859, 33866, 33867]) // 3 ranks

// Infected Wounds - Row 7, Column 3
export const INFECTED_WOUNDS = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "infected-wounds")
    .Position.set(7, 3)

INFECTED_WOUNDS.Spells.add([48483, 48484, 48485]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// King of the Jungle - Row 8, Column 0
export const KING_OF_THE_JUNGLE = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "king-of-the-jungle")
    .Position.set(8, 0)

KING_OF_THE_JUNGLE.Spells.add([48492, 48494, 48495]) // 3 ranks

// Mangle - Row 8, Column 1
export const MANGLE = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "mangle")
    .Position.set(8, 1)
    .Requirements.add(LEADER_OF_THE_PACK.ID, 1)

MANGLE.Spells.add([33917]) // 1 rank

// Improved Mangle - Row 8, Column 2
export const IMPROVED_MANGLE = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "improved-mangle")
    .Position.set(8, 2)

IMPROVED_MANGLE.Spells.add([48532, 48489, 48491]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Rend and Tear - Row 9, Column 1
export const REND_AND_TEAR = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "rend-and-tear")
    .Position.set(9, 1)

REND_AND_TEAR.Spells.add([48432, 48433, 48434, 51268, 51269]) // 5 ranks

// Primal Gore - Row 9, Column 2
export const PRIMAL_GORE = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "primal-gore")
    .Position.set(9, 2)

PRIMAL_GORE.Spells.add([63503]) // 1 rank


// Row 10 (Tier 11)
// ============================================================================

// Berserk - Row 10, Column 1
export const BERSERK = FERAL_COMBAT_TALENT_TREE.Talents
    .addGet("default", "berserk")
    .Position.set(10, 1)

BERSERK.Spells.add([50334]) // 1 rank