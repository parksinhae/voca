CREATE TABLE `study_decks` (
	`key` text PRIMARY KEY NOT NULL,
	`folder_key` text NOT NULL,
	`title` text NOT NULL,
	`kind` text DEFAULT 'RC' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
