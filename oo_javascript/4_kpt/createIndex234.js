var CREATE_INDEX_QUERIES_LIST = [
    'CREATE INDEX IF NOT EXISTS intent_event_name_idx ON "Intent" ("eventName");',
    'CREATE INDEX IF NOT EXISTS intent_botid_idx ON "Intent" ("botId");',
    'CREATE INDEX IF NOT EXISTS entity_botid_idx ON "Entity" ("botId");',
    'CREATE INDEX IF NOT EXISTS entity_token_idx ON "Entity" USING GIN (token array_ops);',
    'CREATE INDEX IF NOT EXISTS intent_input_botid_idx ON "IntentInput" ("botId");',
    'CREATE INDEX IF NOT EXISTS intent_input_text_idx ON "IntentInput" USING HASH ("lowercase");',
    'CREATE INDEX IF NOT EXISTS conversation_session_idx ON "Conversation" ("sessionId");',
    'CREATE INDEX IF NOT EXISTS conversation_bot_idx ON "Conversation" ("botId");',
    'CREATE INDEX IF NOT EXISTS message_botid_idx ON "Messages" ("botId");',
    'CREATE INDEX IF NOT EXISTS message_conversationid_idx ON "Messages" ("conversationId");',
    'CREATE INDEX IF NOT EXISTS message_integration_idx ON "Messages" ((info -> \'integration\'));',
    'CREATE INDEX IF NOT EXISTS bot_outboundid_idx ON "Bot" ((settings -> \'outboundId\'));',
    'CREATE INDEX IF NOT EXISTS conversation_created_idx ON "Conversation" ("createdAt");',
    'CREATE INDEX IF NOT EXISTS conversation_integration_idx ON "Conversation" (integration)'
];

var CREATE_INDEX_QUERIES = CREATE_INDEX_QUERIES_LIST.join('');

console.log(CREATE_INDEX_QUERIES);