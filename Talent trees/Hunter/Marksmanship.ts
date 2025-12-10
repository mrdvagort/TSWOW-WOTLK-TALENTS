import { std } from "wow/wotlk"

// ============================================================================
// Marksmanship Hunter Talent Tree - Original Tree
// TalentTab ID: 363
// ============================================================================

// Get the Hunter class
const HUNTER_CLASS = std.Classes.load("HUNTER")

// Get the Marksmanship talent tree (index 1)
export const MARKSMANSHIP_TALENT_TREE = HUNTER_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Marksmanship tree
const existingTalents = MARKSMANSHIP_TALENT_TREE.Talents.get()
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

// Improved Concussive Shot - Row 0, Column 0
export const IMPROVED_CONCUSSIVE_SHOT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "improved-concussive-shot")
    .Position.set(0, 0)

IMPROVED_CONCUSSIVE_SHOT.Spells.add([19407, 19412]) // 2 ranks

// Focused Aim - Row 0, Column 1
export const FOCUSED_AIM = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "focused-aim")
    .Position.set(0, 1)

FOCUSED_AIM.Spells.add([53620, 53621, 53622]) // 3 ranks

// Lethal Shots - Row 0, Column 2
export const LETHAL_SHOTS = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "lethal-shots")
    .Position.set(0, 2)

LETHAL_SHOTS.Spells.add([19426, 19427, 19429, 19430, 19431]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Careful Aim - Row 1, Column 0
export const CAREFUL_AIM = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "careful-aim")
    .Position.set(1, 0)

CAREFUL_AIM.Spells.add([34482, 34483, 34484]) // 3 ranks

// Improved Hunter's Mark - Row 1, Column 1
export const IMPROVED_HUNTER_S_MARK = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "improved-hunter-s-mark")
    .Position.set(1, 1)

IMPROVED_HUNTER_S_MARK.Spells.add([19421, 19422, 19423]) // 3 ranks

// Mortal Shots - Row 1, Column 2
export const MORTAL_SHOTS = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "mortal-shots")
    .Position.set(1, 2)

MORTAL_SHOTS.Spells.add([19485, 19487, 19488, 19489, 19490]) // 5 ranks


// Row 2 (Tier 3)
// ============================================================================

// Go for the Throat - Row 2, Column 0
export const GO_FOR_THE_THROAT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "go-for-the-throat")
    .Position.set(2, 0)

GO_FOR_THE_THROAT.Spells.add([34950, 34954]) // 2 ranks

// Improved Arcane Shot - Row 2, Column 1
export const IMPROVED_ARCANE_SHOT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "improved-arcane-shot")
    .Position.set(2, 1)

IMPROVED_ARCANE_SHOT.Spells.add([19454, 19455, 19456]) // 3 ranks

// Aimed Shot - Row 2, Column 2
export const AIMED_SHOT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "aimed-shot")
    .Position.set(2, 2)
    .Requirements.add(MORTAL_SHOTS.ID, 5)

AIMED_SHOT.Spells.add([19434]) // 1 rank

// Rapid Killing - Row 2, Column 3
export const RAPID_KILLING = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "rapid-killing")
    .Position.set(2, 3)

RAPID_KILLING.Spells.add([34948, 34949]) // 2 ranks


// Row 3 (Tier 4)
// ============================================================================

// Improved Stings - Row 3, Column 1
export const IMPROVED_STINGS = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "improved-stings")
    .Position.set(3, 1)

IMPROVED_STINGS.Spells.add([19464, 19465, 19466]) // 3 ranks

// Efficiency - Row 3, Column 2
export const EFFICIENCY = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "efficiency")
    .Position.set(3, 2)

EFFICIENCY.Spells.add([19416, 19417, 19418, 19419, 19420]) // 5 ranks


// Row 4 (Tier 5)
// ============================================================================

// Concussive Barrage - Row 4, Column 0
export const CONCUSSIVE_BARRAGE = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "concussive-barrage")
    .Position.set(4, 0)

CONCUSSIVE_BARRAGE.Spells.add([35100, 35102]) // 2 ranks

// Readiness - Row 4, Column 1
export const READINESS = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "readiness")
    .Position.set(4, 1)

READINESS.Spells.add([23989]) // 1 rank

// Barrage - Row 4, Column 2
export const BARRAGE = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "barrage")
    .Position.set(4, 2)

BARRAGE.Spells.add([19461, 19462, 24691]) // 3 ranks


// Row 5 (Tier 6)
// ============================================================================

// Combat Experience - Row 5, Column 0
export const COMBAT_EXPERIENCE = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "combat-experience")
    .Position.set(5, 0)

COMBAT_EXPERIENCE.Spells.add([34475, 34476]) // 2 ranks

// Ranged Weapon Specialization - Row 5, Column 3
export const RANGED_WEAPON_SPECIALIZATION = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "ranged-weapon-specialization")
    .Position.set(5, 3)

RANGED_WEAPON_SPECIALIZATION.Spells.add([19507, 19508, 19509]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Piercing Shots - Row 6, Column 0
export const PIERCING_SHOTS = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "piercing-shots")
    .Position.set(6, 0)

PIERCING_SHOTS.Spells.add([53234, 53237, 53238]) // 3 ranks

// Trueshot Aura - Row 6, Column 1
export const TRUESHOT_AURA = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "trueshot-aura")
    .Position.set(6, 1)
    .Requirements.add(READINESS.ID, 1)

TRUESHOT_AURA.Spells.add([19506]) // 1 rank

// Improved Barrage - Row 6, Column 2
export const IMPROVED_BARRAGE = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "improved-barrage")
    .Position.set(6, 2)
    .Requirements.add(BARRAGE.ID, 3)

IMPROVED_BARRAGE.Spells.add([35104, 35110, 35111]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Master Marksman - Row 7, Column 1
export const MASTER_MARKSMAN = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "master-marksman")
    .Position.set(7, 1)

MASTER_MARKSMAN.Spells.add([34485, 34486, 34487, 34488, 34489]) // 5 ranks

// Rapid Recuperation - Row 7, Column 2
export const RAPID_RECUPERATION = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "rapid-recuperation")
    .Position.set(7, 2)

RAPID_RECUPERATION.Spells.add([53228, 53232]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Wild Quiver - Row 8, Column 0
export const WILD_QUIVER = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "wild-quiver")
    .Position.set(8, 0)

WILD_QUIVER.Spells.add([53215, 53216, 53217]) // 3 ranks

// Silencing Shot - Row 8, Column 1
export const SILENCING_SHOT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "silencing-shot")
    .Position.set(8, 1)
    .Requirements.add(MASTER_MARKSMAN.ID, 5)

SILENCING_SHOT.Spells.add([34490]) // 1 rank

// Improved Steady Shot - Row 8, Column 2
export const IMPROVED_STEADY_SHOT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "improved-steady-shot")
    .Position.set(8, 2)

IMPROVED_STEADY_SHOT.Spells.add([53221, 53222, 53224]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Marked for Death - Row 9, Column 1
export const MARKED_FOR_DEATH = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "marked-for-death")
    .Position.set(9, 1)

MARKED_FOR_DEATH.Spells.add([53241, 53243, 53244, 53245, 53246]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Chimera Shot - Row 10, Column 1
export const CHIMERA_SHOT = MARKSMANSHIP_TALENT_TREE.Talents
    .addGet("default", "chimera-shot")
    .Position.set(10, 1)

CHIMERA_SHOT.Spells.add([53209]) // 1 rank