-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TypographySettings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shop" TEXT NOT NULL,
    "fontFamily" TEXT NOT NULL DEFAULT 'Poppins',
    "desktopSize" TEXT NOT NULL DEFAULT '64',
    "tabletSize" TEXT NOT NULL DEFAULT '48',
    "mobileSize" TEXT NOT NULL DEFAULT '36',
    "fontWeight" TEXT NOT NULL DEFAULT '700',
    "lineHeight" TEXT NOT NULL DEFAULT '1.2',
    "letterSpacing" TEXT NOT NULL DEFAULT '0',
    "unit" TEXT NOT NULL DEFAULT 'px',
    "fontStyle" TEXT NOT NULL DEFAULT 'normal',
    "textTransform" TEXT NOT NULL DEFAULT 'none',
    "textDecoration" TEXT NOT NULL DEFAULT 'none',
    "fontColor" TEXT NOT NULL DEFAULT '#000000',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_TypographySettings" ("createdAt", "desktopSize", "fontFamily", "fontWeight", "id", "letterSpacing", "lineHeight", "mobileSize", "shop", "tabletSize", "unit", "updatedAt") SELECT "createdAt", "desktopSize", "fontFamily", "fontWeight", "id", "letterSpacing", "lineHeight", "mobileSize", "shop", "tabletSize", "unit", "updatedAt" FROM "TypographySettings";
DROP TABLE "TypographySettings";
ALTER TABLE "new_TypographySettings" RENAME TO "TypographySettings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
