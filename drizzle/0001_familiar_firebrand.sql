DROP INDEX `idx_words_english`;--> statement-breakpoint
ALTER TABLE `words` ADD `deck_key` text DEFAULT 'toeic-rc-day1' NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `idx_words_deck_english` ON `words` (`deck_key`,`english`);