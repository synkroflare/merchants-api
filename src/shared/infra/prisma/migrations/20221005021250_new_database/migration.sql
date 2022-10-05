-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slot1" TEXT NOT NULL,
    "slot2" TEXT NOT NULL,
    "slot3" TEXT,
    "slot4" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "discovered" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "currentTurn" INTEGER NOT NULL DEFAULT 1,
    "initialMonth" INTEGER NOT NULL DEFAULT 0,
    "activeUserId" INTEGER NOT NULL DEFAULT 1,
    "activeUserName" TEXT NOT NULL DEFAULT 'default_active_user',
    "activeUserSlot" INTEGER NOT NULL DEFAULT 1,
    "usedSlots" INTEGER NOT NULL DEFAULT 1,
    "slot1Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot1Id" INTEGER NOT NULL DEFAULT 0,
    "slot2Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot2Id" INTEGER NOT NULL DEFAULT 0,
    "slot3Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot3Id" INTEGER NOT NULL DEFAULT 0,
    "slot4Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot4Id" INTEGER NOT NULL DEFAULT 0,
    "slot5Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot5Id" INTEGER NOT NULL DEFAULT 0,
    "slot6Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot6Id" INTEGER NOT NULL DEFAULT 0,
    "slot7Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot7Id" INTEGER NOT NULL DEFAULT 0,
    "slot8Name" TEXT NOT NULL DEFAULT 'default_blank_name',
    "slot8Id" INTEGER NOT NULL DEFAULT 0,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL DEFAULT 1,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roomId" INTEGER NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'none',
    "location" TEXT NOT NULL DEFAULT 'default',
    "actions" INTEGER NOT NULL DEFAULT 2,
    "BPD1" BOOLEAN NOT NULL DEFAULT false,
    "BPD2" BOOLEAN NOT NULL DEFAULT false,
    "BPD3" BOOLEAN NOT NULL DEFAULT false,
    "BPD4" BOOLEAN NOT NULL DEFAULT false,
    "BPD5" BOOLEAN NOT NULL DEFAULT false,
    "BPD6" BOOLEAN NOT NULL DEFAULT false,
    "BPD7" BOOLEAN NOT NULL DEFAULT false,
    "BPD8" BOOLEAN NOT NULL DEFAULT false,
    "BPD9" BOOLEAN NOT NULL DEFAULT false,
    "BPD10" BOOLEAN NOT NULL DEFAULT false,
    "BPD11" BOOLEAN NOT NULL DEFAULT false,
    "BPD12" BOOLEAN NOT NULL DEFAULT false,
    "BPD13" BOOLEAN NOT NULL DEFAULT false,
    "BPD14" BOOLEAN NOT NULL DEFAULT false,
    "BPD15" BOOLEAN NOT NULL DEFAULT false,
    "BPD16" BOOLEAN NOT NULL DEFAULT false,
    "BPD17" BOOLEAN NOT NULL DEFAULT false,
    "BPD18" BOOLEAN NOT NULL DEFAULT false,
    "BPD19" BOOLEAN NOT NULL DEFAULT false,
    "BPD20" BOOLEAN NOT NULL DEFAULT false,
    "BPD21" BOOLEAN NOT NULL DEFAULT false,
    "BPD22" BOOLEAN NOT NULL DEFAULT false,
    "BPD23" BOOLEAN NOT NULL DEFAULT false,
    "BPD24" BOOLEAN NOT NULL DEFAULT false,
    "BPD25" BOOLEAN NOT NULL DEFAULT false,
    "BPD26" BOOLEAN NOT NULL DEFAULT false,
    "BPD27" BOOLEAN NOT NULL DEFAULT false,
    "BPD28" BOOLEAN NOT NULL DEFAULT false,
    "BPD29" BOOLEAN NOT NULL DEFAULT false,
    "BPD30" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT,
    "facebookId" TEXT,
    "instagramId" TEXT,
    "telegramId" TEXT,
    "websiteId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "serviceHour" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "weekDay" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "serviceHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "protocol" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "type" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "fromMe" BOOLEAN NOT NULL,
    "statusType" INTEGER NOT NULL,
    "messageType" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "body" TEXT,
    "mediaUrl" TEXT,
    "mediaFileLength" INTEGER,
    "mediaCaption" TEXT,
    "mediaPageCount" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatId" INTEGER NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_companyTocontact" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_chatTocontact" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_companyTocontact_AB_unique" ON "_companyTocontact"("A", "B");

-- CreateIndex
CREATE INDEX "_companyTocontact_B_index" ON "_companyTocontact"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_chatTocontact_AB_unique" ON "_chatTocontact"("A", "B");

-- CreateIndex
CREATE INDEX "_chatTocontact_B_index" ON "_chatTocontact"("B");

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_companyTocontact" ADD CONSTRAINT "_companyTocontact_A_fkey" FOREIGN KEY ("A") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_companyTocontact" ADD CONSTRAINT "_companyTocontact_B_fkey" FOREIGN KEY ("B") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chatTocontact" ADD CONSTRAINT "_chatTocontact_A_fkey" FOREIGN KEY ("A") REFERENCES "chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chatTocontact" ADD CONSTRAINT "_chatTocontact_B_fkey" FOREIGN KEY ("B") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
