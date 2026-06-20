-- CreateTable
CREATE TABLE "TypographySettings" (
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
