import { std } from "wow/wotlk"

// ============================================================================
// COMBAT Rogue Talent Tree - Original Tree
// TalentTab ID: 181
// ============================================================================

// Get the Rogue class
const ROGUE_CLASS = std.Classes.load("ROGUE")

// Get the COMBAT talent tree (index 0)
 const ASSASSINATION_TALENT_TREE = ROGUE_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the COMBAT tree
const existingTalents = ASSASSINATION_TALENT_TREE.Talents.get()
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

// Improved Gouge - Row 0, Column 0
 const IMPROVED_GOUGE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "improved-gouge")
    .Position.set(0, 0)

IMPROVED_GOUGE.Spells.add([13741, 13793, 13792]) // 3 ranks

// Improved Sinister Strike - Row 0, Column 1
 const IMPROVED_SINISTER_STRIKE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "improved-sinister-strike")
    .Position.set(0, 1)

IMPROVED_SINISTER_STRIKE.Spells.add([13732, 13863]) // 2 ranks

// Dual Wield Specialization - Row 0, Column 2
 const ROGUE_DUAL_WIELD_SPECIALIZATION = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "ROGUE_dual-wield-specialization")
    .Position.set(0, 2)

ROGUE_DUAL_WIELD_SPECIALIZATION.Spells.add([13715, 13848, 13849, 13851, 13852]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Improved Slice and Dice - Row 1, Column 0
 const IMPROVED_SLICE_AND_DICE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "improved-slice-and-dice")
    .Position.set(1, 0)

IMPROVED_SLICE_AND_DICE.Spells.add([14165, 14166]) // 2 ranks

// Deflection - Row 1, Column 1
 const ROGUE_DEFLECTION = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "ROGUE_deflection")
    .Position.set(1, 1)

ROGUE_DEFLECTION.Spells.add([13713, 13853, 13854]) // 3 ranks

// Precision - Row 1, Column 3
 const ROGUE_PRECISION = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "ROGUE_precision")
    .Position.set(1, 3)

ROGUE_PRECISION.Spells.add([13705, 13832, 13843, 13844, 13845]) // 5 ranks


// Row 2 (Tier 3)
// ============================================================================

// Endurance - Row 2, Column 0
 const ENDURANCE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "endurance")
    .Position.set(2, 0)

ENDURANCE.Spells.add([13742, 13872]) // 2 ranks

// Riposte - Row 2, Column 1
 const RIPOSTE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "riposte")
    .Position.set(2, 1)

RIPOSTE.Spells.add([14251]) // 1 rank

// Close Quarters Combat - Row 2, Column 2
 const CLOSE_QUARTERS_COMBAT = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "close-quarters-combat")
    .Position.set(2, 2)
    .Requirements.add(ROGUE_DUAL_WIELD_SPECIALIZATION.ID, 5)

CLOSE_QUARTERS_COMBAT.Spells.add([13706, 13804, 13805, 13806, 13807]) // 5 ranks


// Row 3 (Tier 4)
// ============================================================================

// Improved Kick - Row 3, Column 0
 const IMPROVED_KICK = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "improved-kick")
    .Position.set(3, 0)

IMPROVED_KICK.Spells.add([13754, 13867]) // 2 ranks

// Improved Sprint - Row 3, Column 1
 const IMPROVED_SPRINT = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "improved-sprint")
    .Position.set(3, 1)

IMPROVED_SPRINT.Spells.add([13743, 13875]) // 2 ranks

// Lightning Reflexes - Row 3, Column 2
 const ROGUE_LIGHTNING_REFLEXES = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "ROGUE_lightning-reflexes")
    .Position.set(3, 2)

ROGUE_LIGHTNING_REFLEXES.Spells.add([13712, 13788, 13789]) // 3 ranks

// Aggression - Row 3, Column 3
 const AGGRESSION = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "aggression")
    .Position.set(3, 3)

AGGRESSION.Spells.add([18427, 18428, 18429, 61330, 61331]) // 5 ranks


// Row 4 (Tier 5)
// ============================================================================

// Mace Specialization - Row 4, Column 0
 const ROGUE_MACE_SPECIALIZATION = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "ROGUE_mace-specialization")
    .Position.set(4, 0)

ROGUE_MACE_SPECIALIZATION.Spells.add([13709, 13800, 13801, 13802, 13803]) // 5 ranks

// Blade Flurry - Row 4, Column 1
 const BLADE_FLURRY = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "blade-flurry")
    .Position.set(4, 1)

BLADE_FLURRY.Spells.add([13877]) // 1 rank

// Hack and Slash - Row 4, Column 2
 const HACK_AND_SLASH = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "hack-and-slash")
    .Position.set(4, 2)

HACK_AND_SLASH.Spells.add([13960, 13961, 13962, 13963, 13964]) // 5 ranks


// Row 5 (Tier 6)
// ============================================================================

// Weapon Expertise - Row 5, Column 1
 const WEAPON_EXPERTISE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "weapon-expertise")
    .Position.set(5, 1)

WEAPON_EXPERTISE.Spells.add([30919, 30920]) // 2 ranks

// Blade Twisting - Row 5, Column 2
 const BLADE_TWISTING = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "blade-twisting")
    .Position.set(5, 2)

BLADE_TWISTING.Spells.add([31124, 31126]) // 2 ranks


// Row 6 (Tier 7)
// ============================================================================

// Vitality - Row 6, Column 0
 const ROGUE_VITALITY = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "ROGUE_vitality")
    .Position.set(6, 0)

ROGUE_VITALITY.Spells.add([31122, 31123, 61329]) // 3 ranks

// Adrenaline Rush - Row 6, Column 1
 const ADRENALINE_RUSH = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "adrenaline-rush")
    .Position.set(6, 1)

ADRENALINE_RUSH.Spells.add([13750]) // 1 rank

// Nerves of Steel - Row 6, Column 2
 const NERVES_OF_STEEL = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "nerves-of-steel")
    .Position.set(6, 2)

NERVES_OF_STEEL.Spells.add([31130, 31131]) // 2 ranks


// Row 7 (Tier 8)
// ============================================================================

// Throwing Specialization - Row 7, Column 0
 const THROWING_SPECIALIZATION = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "throwing-specialization")
    .Position.set(7, 0)

THROWING_SPECIALIZATION.Spells.add([5952, 51679]) // 2 ranks

// Combat Potency - Row 7, Column 2
 const COMBAT_POTENCY = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "combat-potency")
    .Position.set(7, 2)

COMBAT_POTENCY.Spells.add([35541, 35550, 35551, 35552, 35553]) // 5 ranks


// Row 8 (Tier 9)
// ============================================================================

// Unfair Advantage - Row 8, Column 0
 const UNFAIR_ADVANTAGE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "unfair-advantage")
    .Position.set(8, 0)

UNFAIR_ADVANTAGE.Spells.add([51672, 51674]) // 2 ranks

// Surprise Attacks - Row 8, Column 1
 const SURPRISE_ATTACKS = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "surprise-attacks")
    .Position.set(8, 1)
    .Requirements.add(ADRENALINE_RUSH.ID, 1)

SURPRISE_ATTACKS.Spells.add([32601]) // 1 rank

// Savage Combat - Row 8, Column 2
 const SAVAGE_COMBAT = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "savage-combat")
    .Position.set(8, 2)

SAVAGE_COMBAT.Spells.add([51682, 58413]) // 2 ranks


// Row 9 (Tier 10)
// ============================================================================

// Prey on the Weak - Row 9, Column 1
 const PREY_ON_THE_WEAK = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "prey-on-the-weak")
    .Position.set(9, 1)

PREY_ON_THE_WEAK.Spells.add([51685, 51686, 51687, 51688, 51689]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Killing Spree - Row 10, Column 1
 const KILLING_SPREE = ASSASSINATION_TALENT_TREE.Talents
    .addGet("default", "killing-spree")
    .Position.set(10, 1)

KILLING_SPREE.Spells.add([51690]) // 1 rank