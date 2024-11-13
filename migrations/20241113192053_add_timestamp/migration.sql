-- Step 1: Add the timestamp column as nullable
ALTER TABLE "UpdatedData" 
ADD COLUMN "timestamp" TIMESTAMP(3) NULL;

-- Step 2: Update existing rows to set a value for timestamp
UPDATE "UpdatedData" 
SET "timestamp" = "createdAt"; -- Copy existing data

-- Step 3: Drop the createdAt column
ALTER TABLE "UpdatedData" 
DROP COLUMN "createdAt";

-- Step 4: Alter timestamp to be NOT NULL
ALTER TABLE "UpdatedData" 
ALTER COLUMN "timestamp" SET NOT NULL;
