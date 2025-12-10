import { std } from "wow/wotlk"

// ============================================================================
// Beast Mastery Hunter Talent Tree - Original Tree
// TalentTab ID: 361
// ============================================================================

// Get the Hunter class
const HUNTER_CLASS = std.Classes.load("HUNTER")

// Get the Beast Mastery talent tree (index 0)
 const BEAST_MASTERY_TALENT_TREE = HUNTER_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Beast Mastery tree
const existingTalents = BEAST_MASTERY_TALENT_TREE.Talents.get()
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

// Improved Aspect of the Hawk - Row 0, Column 1
 const IMPROVED_ASPECT_OF_THE_HAWK = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "improved-aspect-of-the-hawk")
    .Position.set(0, 1)

IMPROVED_ASPECT_OF_THE_HAWK.Spells.add([19552, 19553, 19554, 19555, 19556]) // 5 ranks

// Endurance Training - Row 0, Column 2
 const ENDURANCE_TRAINING = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "endurance-training")
    .Position.set(0, 2)

ENDURANCE_TRAINING.Spells.add([19583, 19584, 19585, 19586, 19587]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Focused Fire - Row 1, Column 0
 const FOCUSED_FIRE = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "focused-fire")
    .Position.set(1, 0)

FOCUSED_FIRE.Spells.add([35029, 35030]) // 2 ranks

// Improved Aspect of the Monkey - Row 1, Column 1
 const IMPROVED_ASPECT_OF_THE_MONKEY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "improved-aspect-of-the-monkey")
    .Position.set(1, 1)

IMPROVED_ASPECT_OF_THE_MONKEY.Spells.add([19549, 19550, 19551]) // 3 ranks

// Thick Hide - Row 1, Column 2
 const THICK_HIDE = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "thick-hide")
    .Position.set(1, 2)

THICK_HIDE.Spells.add([19609, 19610, 19612]) // 3 ranks

// Improved Revive Pet - Row 1, Column 3
 const IMPROVED_REVIVE_PET = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "improved-revive-pet")
    .Position.set(1, 3)

IMPROVED_REVIVE_PET.Spells.add([24443, 19575]) // 2 ranks


// Row 2 (Tier 3)
// ============================================================================

// Pathfinding - Row 2, Column 0
 const PATHFINDING = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "pathfinding")
    .Position.set(2, 0)

PATHFINDING.Spells.add([19559, 19560]) // 2 ranks

// Aspect Mastery - Row 2, Column 1
 const ASPECT_MASTERY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "aspect-mastery")
    .Position.set(2, 1)

ASPECT_MASTERY.Spells.add([53265]) // 1 rank

// Unleashed Fury - Row 2, Column 2
 const UNLEASHED_FURY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "unleashed-fury")
    .Position.set(2, 2)

UNLEASHED_FURY.Spells.add([19616, 19617, 19618, 19619, 19620]) // 5 ranks


// Row 3 (Tier 4)
// ============================================================================

// Improved Mend Pet - Row 3, Column 1
 const IMPROVED_MEND_PET = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "improved-mend-pet")
    .Position.set(3, 1)

IMPROVED_MEND_PET.Spells.add([19572, 19573]) // 2 ranks

// Ferocity - Row 3, Column 2
 const FEROCITY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "ferocity")
    .Position.set(3, 2)

FEROCITY.Spells.add([19598, 19599, 19600, 19601, 19602]) // 5 ranks


// Row 4 (Tier 5)
// ============================================================================

// Spirit Bond - Row 4, Column 0
 const SPIRIT_BOND = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "spirit-bond")
    .Position.set(4, 0)

SPIRIT_BOND.Spells.add([19578, 20895]) // 2 ranks

// Intimidation - Row 4, Column 1
 const INTIMIDATION = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "intimidation")
    .Position.set(4, 1)

INTIMIDATION.Spells.add([19577]) // 1 rank

// Bestial Discipline - Row 4, Column 3
 const BESTIAL_DISCIPLINE = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "bestial-discipline")
    .Position.set(4, 3)

BESTIAL_DISCIPLINE.Spells.add([19590, 19592]) // 2 ranks


// Row 5 (Tier 6)
// ============================================================================

// Animal Handler - Row 5, Column 0
 const ANIMAL_HANDLER = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "animal-handler")
    .Position.set(5, 0)

ANIMAL_HANDLER.Spells.add([34453, 34454]) // 2 ranks

// Frenzy - Row 5, Column 2
 const FRENZY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "frenzy")
    .Position.set(5, 2)
    .Requirements.add(FEROCITY.ID, 5)

FRENZY.Spells.add([19621, 19622, 19623, 19624, 19625]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Ferocious Inspiration - Row 6, Column 0
 const FEROCIOUS_INSPIRATION = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "ferocious-inspiration")
    .Position.set(6, 0)

FEROCIOUS_INSPIRATION.Spells.add([34455, 34459, 34460]) // 3 ranks

// Bestial Wrath - Row 6, Column 1
 const BESTIAL_WRATH = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "bestial-wrath")
    .Position.set(6, 1)
    .Requirements.add(INTIMIDATION.ID, 1)

BESTIAL_WRATH.Spells.add([19574]) // 1 rank

// Catlike Reflexes - Row 6, Column 2
 const CATLIKE_REFLEXES = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "catlike-reflexes")
    .Position.set(6, 2)

CATLIKE_REFLEXES.Spells.add([34462, 34464, 34465]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Invigoration - Row 7, Column 0
 const INVIGORATION = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "invigoration")
    .Position.set(7, 0)

INVIGORATION.Spells.add([53252, 53253]) // 2 ranks

// Serpent's Swiftness - Row 7, Column 2
 const SERPENT_S_SWIFTNESS = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "serpent-s-swiftness")
    .Position.set(7, 2)

SERPENT_S_SWIFTNESS.Spells.add([34466, 34467, 34468, 34469, 34470]) // 5 ranks


// Row 8 (Tier 9)
// ============================================================================

// Longevity - Row 8, Column 0
 const LONGEVITY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "longevity")
    .Position.set(8, 0)

LONGEVITY.Spells.add([53262, 53263, 53264]) // 3 ranks

// The Beast Within - Row 8, Column 1
 const THE_BEAST_WITHIN = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "the-beast-within")
    .Position.set(8, 1)
    .Requirements.add(BESTIAL_WRATH.ID, 1)

THE_BEAST_WITHIN.Spells.add([34692]) // 1 rank

// Cobra Strikes - Row 8, Column 2
 const COBRA_STRIKES = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "cobra-strikes")
    .Position.set(8, 2)

COBRA_STRIKES.Spells.add([53256, 53259, 53260]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Kindred Spirits - Row 9, Column 1
 const KINDRED_SPIRITS = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "kindred-spirits")
    .Position.set(9, 1)

KINDRED_SPIRITS.Spells.add([56314, 56315, 56316, 56317, 56318]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Beast Mastery - Row 10, Column 1
 const BEAST_MASTERY = BEAST_MASTERY_TALENT_TREE.Talents
    .addGet("default", "beast-mastery")
    .Position.set(10, 1)

BEAST_MASTERY.Spells.add([53270]) // 1 rank