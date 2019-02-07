# Chatbot-firebase-dialogflow
To make a chatbot using Dialogflow and deploy using firebase. 
Chatbot is a program that can conduct an intelligent conversation. It should be able to convincingly simulate a human behaviour and pass the turing test.
# What is Dialogflow
Dialogflow (formerly Api.ai, Speaktoit) is a Google-owned developer of human–computer interaction technologies based on natural language conversations. The company is best known for creating the Assistant (by Speaktoit), a virtual buddy for Android, iOS, and Windows Phone smartphones that performs tasks and answers users’ question in a natural language.[1] Speaktoit has also created a natural language processing engine that incorporates conversation context like dialogue history, location and user preferences. — Wiki
# The basics components of Dialoglfow:
# Invocation:
It is similar to saying hello to a friend
# Intents:
Intents include elements and logic to parse user’s information. This maps what the user says with response. Intents have several components: contexts, user says, events, action, and response.
User says: Different variations of how the same question can be asked by a user. The more variation is added, the better agent can understand
# Entities:
These are the knowledge repository that the agent would use to answer the user’s question. There are a variety of entities: system entities to include information about time etc, weather/location entities etc.
# Fulfillment Request:
Dialogflow sends the request to fetch data needed. (sent to webhook) Webhook determines how it would like to respond and send back to dialog.
# Response:
The backend system including webhook, entities, intents, user says, etc would produce a set of response
#Context:
Contexts are used to store parameter values for different types of intent. Contexts can be used to repair broken conversation or to branch conversations.

Created a basic hotel booking agent.
