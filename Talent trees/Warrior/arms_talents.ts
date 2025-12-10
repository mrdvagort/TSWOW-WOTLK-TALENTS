import { std } from "wow/wotlk"

// ============================================================================
// Arms Warrior Talent Tree - Original Tree
// TalentTab ID: 161
// ============================================================================

// Get the Warrior class
const WARRIOR_CLASS = std.Classes.load("WARRIOR")

// Get the original Arms talent tree (index 0)
const ARMS_TALENT_TREE = WARRIOR_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Arms tree
const existingTalents = ARMS_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// Arms Talents - All spells reference the original Blizzard spell IDs
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Improved Heroic Strike - Row 0, Column 0
const IMPROVED_HEROIC_STRIKE = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-heroic-strike")
    .Position.set(0, 0)

IMPROVED_HEROIC_STRIKE.Spells.add([12282, 12663, 12664]) // 3 ranks

// Deflection - Row 0, Column 1
const DEFLECTION = ARMS_TALENT_TREE.Talents
    .addGet("default", "deflection")
    .Position.set(0, 1)

DEFLECTION.Spells.add([16462, 16463, 16464, 16465, 16466]) // 5 ranks

// Improved Rend - Row 0, Column 2
const IMPROVED_REND = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-rend")
    .Position.set(0, 2)

IMPROVED_REND.Spells.add([12286, 12658]) // 2 ranks

// Row 1 (Tier 2)
// ============================================================================

// Improved Charge - Row 1, Column 0
const IMPROVED_CHARGE = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-charge")
    .Position.set(1, 0)

IMPROVED_CHARGE.Spells.add([12285, 12697]) // 2 ranks

// Iron Will - Row 1, Column 1
const IRON_WILL = ARMS_TALENT_TREE.Talents
    .addGet("default", "iron-will")
    .Position.set(1, 1)

IRON_WILL.Spells.add([12300, 12959, 12960]) // 3 ranks

// Tactical Mastery - Row 1, Column 3
const TACTICAL_MASTERY = ARMS_TALENT_TREE.Talents
    .addGet("default", "tactical-mastery")
    .Position.set(1, 2)

TACTICAL_MASTERY.Spells.add([12295, 12676, 12677]) // 3 ranks

// Row 2 (Tier 3)
// ============================================================================

// Improved Overpower - Row 2, Column 0
const IMPROVED_OVERPOWER = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-overpower")
    .Position.set(2, 0)

IMPROVED_OVERPOWER.Spells.add([12290, 12963]) // 2 ranks

// Anger Management - Row 2, Column 1
const ANGER_MANAGEMENT = ARMS_TALENT_TREE.Talents
    .addGet("default", "anger-management")
    .Position.set(2, 1)

ANGER_MANAGEMENT.Spells.add([12296]) // 1 rank

// Impale - Row 2, Column 2
const IMPALE = ARMS_TALENT_TREE.Talents
    .addGet("default", "impale")
    .Position.set(2, 2)

IMPALE.Spells.add([16493, 16494]) // 2 ranks

// Deep Wounds - Row 2, Column 3
const DEEP_WOUNDS = ARMS_TALENT_TREE.Talents
    .addGet("default", "deep-wounds")
    .Position.set(2, 3)

DEEP_WOUNDS.Spells.add([12834, 12849, 12867]) // 3 ranks

// Row 3 (Tier 4)
// ============================================================================

// Two-Handed Weapon Specialization - Row 3, Column 1
const TWO_HANDED_WEAPON_SPEC = ARMS_TALENT_TREE.Talents
    .addGet("default", "two-handed-weapon-spec")
    .Position.set(3, 1)

TWO_HANDED_WEAPON_SPEC.Spells.add([12163, 12711, 12712]) // 3 ranks

// Taste for Blood - Row 3, Column 2
const TASTE_FOR_BLOOD = ARMS_TALENT_TREE.Talents
    .addGet("default", "taste-for-blood")
    .Position.set(3, 2)

TASTE_FOR_BLOOD.Spells.add([56636, 56637, 56638]) // 3 ranks

// Row 4 (Tier 5)
// ============================================================================

// Poleaxe Specialization - Row 4, Column 0
const POLEAXE_SPEC = ARMS_TALENT_TREE.Talents
    .addGet("default", "poleaxe-spec")
    .Position.set(4, 0)

POLEAXE_SPEC.Spells.add([12700, 12701, 12702, 12703, 12704]) // 5 ranks

// Sweeping Strikes - Row 4, Column 1
const SWEEPING_STRIKES = ARMS_TALENT_TREE.Talents
    .addGet("default", "sweeping-strikes")
    .Position.set(4, 1)

SWEEPING_STRIKES.Spells.add([12328]) // 1 rank

// Mace Specialization - Row 4, Column 2
const MACE_SPEC = ARMS_TALENT_TREE.Talents
    .addGet("default", "mace-spec")
    .Position.set(4, 2)

MACE_SPEC.Spells.add([12284, 12701, 12702, 12703, 12704]) // 5 ranks

// Sword Specialization - Row 4, Column 3
const SWORD_SPEC = ARMS_TALENT_TREE.Talents
    .addGet("default", "sword-spec")
    .Position.set(4, 3)

SWORD_SPEC.Spells.add([12281, 12812, 12813, 12814, 12815]) // 5 ranks

// Row 5 (Tier 6)
// ============================================================================

// Weapon Mastery - Row 5, Column 0
const WEAPON_MASTERY = ARMS_TALENT_TREE.Talents
    .addGet("default", "weapon-mastery")
    .Position.set(5, 0)

WEAPON_MASTERY.Spells.add([20504, 20505]) // 2 ranks

// Improved Hamstring - Row 5, Column 1
const IMPROVED_HAMSTRING = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-hamstring")
    .Position.set(5, 2)

IMPROVED_HAMSTRING.Spells.add([12289, 12668]) // 2 ranks

// Trauma - Row 5, Column 2
const TRAUMA = ARMS_TALENT_TREE.Talents
    .addGet("default", "trauma")
    .Position.set(5, 3)

TRAUMA.Spells.add([46854, 46855]) // 2 ranks

// Row 6 (Tier 7)
// ============================================================================

// Second Wind - Row 6, Column 0
const SECOND_WIND = ARMS_TALENT_TREE.Talents
    .addGet("default", "second-wind")
    .Position.set(6, 0)

SECOND_WIND.Spells.add([29838, 29834]) // 2 ranks

// Mortal Strike - Row 6, Column 1
const MORTAL_STRIKE = ARMS_TALENT_TREE.Talents
    .addGet("default", "mortal-strike")
    .Position.set(6, 1)
    .Requirements.add(SWEEPING_STRIKES.ID, 1)

MORTAL_STRIKE.Spells.add([12294]) // 1 rank

// Strength of Arms - Row 6, Column 2
const STRENGTH_OF_ARMS = ARMS_TALENT_TREE.Talents
    .addGet("default", "strength-of-arms")
    .Position.set(6, 2)

STRENGTH_OF_ARMS.Spells.add([46865, 46866]) // 2 ranks

// Improved Slam - Row 6, Column 3
const IMPROVED_SLAM = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-slam")
    .Position.set(6, 3)

IMPROVED_SLAM.Spells.add([12862, 12330]) // 2 ranks

// Row 7 (Tier 8)
// ============================================================================

// Juggernaut - Row 7, Column 0
const JUGGERNAUT = ARMS_TALENT_TREE.Talents
    .addGet("default", "juggernaut")
    .Position.set(7, 0)

JUGGERNAUT.Spells.add([64976]) // 1 rank

// Improved Mortal Strike - Row 7, Column 1
const IMPROVED_MORTAL_STRIKE = ARMS_TALENT_TREE.Talents
    .addGet("default", "improved-mortal-strike")
    .Position.set(7, 1)
    .Requirements.add(MORTAL_STRIKE.ID, 1)

IMPROVED_MORTAL_STRIKE.Spells.add([35446, 35448, 35449]) // 3 ranks

// Unrelenting Assault - Row 7, Column 2
const UNRELENTING_ASSAULT = ARMS_TALENT_TREE.Talents
    .addGet("default", "unrelenting-assault")
    .Position.set(7, 2)

UNRELENTING_ASSAULT.Spells.add([46859, 46860]) // 2 ranks

// Row 8 (Tier 9)
// ============================================================================

// Sudden Death - Row 8, Column 0
const SUDDEN_DEATH = ARMS_TALENT_TREE.Talents
    .addGet("default", "sudden-death")
    .Position.set(8, 0)

SUDDEN_DEATH.Spells.add([29723, 29725, 29724]) // 3 ranks

// Endless Rage - Row 8, Column 1
const ENDLESS_RAGE = ARMS_TALENT_TREE.Talents
    .addGet("default", "endless-rage")
    .Position.set(8, 1)

ENDLESS_RAGE.Spells.add([29623]) // 1 rank

// Blood Frenzy - Row 8, Column 2
const BLOOD_FRENZY = ARMS_TALENT_TREE.Talents
    .addGet("default", "blood-frenzy")
    .Position.set(8, 2)

BLOOD_FRENZY.Spells.add([29836, 29859]) // 2 ranks

// Row 9 (Tier 10)
// ============================================================================

// Wrecking Crew - Row 9, Column 1
const WRECKING_CREW = ARMS_TALENT_TREE.Talents
    .addGet("default", "wrecking-crew")
    .Position.set(9, 1)

WRECKING_CREW.Spells.add([46867, 56611, 56612, 56613, 56614]) // 5 ranks

// Row 10 (Tier 11)
// ============================================================================

// Bladestorm - Row 10, Column 1
const BLADESTORM = ARMS_TALENT_TREE.Talents
    .addGet("default", "bladestorm")
    .Position.set(10, 1)

BLADESTORM.Spells.add([46924]) // 1 rank




// Talents to fix
// IRONWILL