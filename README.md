# it8302-ca2 introduction

This repository was prepared in accordance with the requirements of the AI Human Interface module in the Singapore Polytechnic Specialist Diploma in Data Science (Artificial Intelligence).

----

# CA2 Requirements

## MINIMUM APP REQUIREMENTS

1. The chatbot should be able to be able respond to a ‘who are you’ utterance and give a summary of its name and functionality.
2. The chatbot should have at least one intent that is integrated with fulfillment.
3. Implemented fulfillment should be successfully deployed into Heroku, DialogFlow inline code editor (Cloud functions), or any similar hosting service.
4. Fulfillment code should be able to respond with at least one properly formatted content to a chatbot client
5. Fulfillment code should be able to demonstrate at least one of the following functionality:
 a. Ability to retrieve content from a Firebase database
 b. Ability to retrieve content from a REST API
6. Fulfillment code should be able to demonstrate handling of post requests from DialogFlow and parsing of essential information. (i.e. read the intents, parameters of the post request etc..)

## WHAT IS TO BE SUBMITTED?

A document which contains the following:
- Bot name
- Bot description and purpose
- Brief description of APIs used
- URL of the webhook used in fulfillment (only if Heroku is used)
- URL of working web integration of chatbot
- Screenshots of sample utterunces and chatbot response
- Screenshots of of intents, entities, contexts and training data.
- Source code of the NodeJS folder
- Exported zip file of the chatbot (i.e. intents,entities) taken from Dialogflow

## EXTRA FEATURES

Any API/functionality added to your chatbot, which was not discussed in our practicals, and is a product of your own research and testing will be considered an extra feature.

| Feature(s) | Marks Allocated |
|---|---| 
|Quality of Fulfillment integration|50|
|Quality of Chatbot Functionality|30|
|Overall client interaction|10|
|Quality of Integrations|10|
|Program Score|100|

---

# Chat Bot Overview

A Telegram/Facebook Page chatbot which will connect to the Spotify API through a `heroku` hosted app, and give playlist/song recommendations based on what the user says.

## Key Services

- Dialogflow
- Telegram
- Facebook Messenger
- Heroku
- Spotify API

## Tech Stack

- `javascript`
- `nodejs`

---
