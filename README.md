# Talent Trees

This folder contains TypeScript datascripts for defining and managing all World of Warcraft class talent trees in TSWoW. Each talent tree is programmatically defined with precise positioning, spell ranks, and talent dependencies.

## Purpose

These scripts rebuild talent trees from scratch using TSWoW's API, allowing you to:
- Modify existing talent positions and requirements
- Change spell ranks associated with talents
- Create custom talent tree layouts
- Extract talent data from the game's database for reference

## Structure

### Class Directories
Each WoW class has its own directory containing TypeScript files for each specialization:

- **Warrior** → `arms_talents.ts`, `fury_talents.ts`, `protection_talents.ts`
- **Paladin** → `Holy.ts`, `Protection.ts`, `Retribution.ts`  
- **Hunter** → `BeastMastery.ts`, `Marksmanship.ts`, `Survival.ts`
- **Rogue** → `Assassination.ts`, `Combat.ts`, `Subtlety.ts`
- **Priest** → `Discipline.ts`, `Holy.ts`, `Shadow.ts`
- **Shaman** → `Elemental.ts`, `Enhancement.ts`, `Restoration.ts`
- **Mage** → `Arcane.ts`, `Fire.ts`, `Frost.ts`
- **Warlock** → `Affliction.ts`, `Demonology.ts`, `Destruction.ts`
- **Druid** → `Balance.ts`, `FeralCombat.ts`, `Restoration.ts`

### Utility Files

- **`Printer.ts`** - Utility script that extracts talent information from the game database and generates copy-paste TypeScript code for talent definitions
- **`TALENT_TAB_IDS.md`** - Reference document mapping TalentTab IDs to class specializations

## How It Works

Each talent tree file:
1. Loads the appropriate class and talent tree
2. Clears all existing talents from that tree
3. Defines each talent with:
   - **Position** - Grid coordinates (row, column) in the talent tree UI
   - **Spell Ranks** - Array of Spell IDs representing each rank of the talent
   - **Requirements** - Dependencies on other talents (if any)

Example talent definition:

```typescript
export const GUARDIAN_SPIRIT = HOLY_TALENT_TREE.Talents
    .addGet("default", "guardian-spirit")
    .Position.set(10, 1)

GUARDIAN_SPIRIT.Spells.add([47788]) // 1 rank
```

## Workflow for Extracting Talents

1. Open `Printer.ts`
2. Set `TAB_ID_TO_PRINT` to the desired talent tab ID (see `TALENT_TAB_IDS.md`)
3. Set `ENABLE_CONSOLE_LOG` to `true`
4. Run `build data` in the TSWoW shell
5. Copy the console output
6. Open the corresponding specialization file
7. Paste below the `// PASTE PRINTER OUTPUT BELOW THIS LINE` comment
8. Repeat for all specs you need to extract

## Technical Details

- **Talent Positioning**: Uses 0-indexed grid coordinates (row 0 = Tier 1, row 10 = Tier 11)
- **Spell Ranks**: Supports up to 9 ranks per talent
- **Talent Requirements**: Can specify prerequisite talents using `.Requirements.add(TALENT_ID, REQUIRED_RANKS)`
- **Naming Convention**: Talent variables use SCREAMING_SNAKE_CASE, kebab-case for IDs

## Modifying Talents

To modify a talent tree:
1. Navigate to the appropriate class folder
2. Open the specialization file you want to modify
3. Edit talent positions, spell ranks, or requirements as needed
4. Run `build data` in TSWoW to apply your changes

## Notes

- All talent trees are completely rebuilt when these scripts run, replacing vanilla talent configurations
- Make sure talent positions don't overlap on the same row/column
- Spell IDs must be valid entries in the Spell.dbc database
- Talent requirements reference the prerequisite talent's ID variable and required rank count

