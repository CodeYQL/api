CodeYQL API requirements

# Functional Reqs
has to have https

# Database schema
event
- event_id (uuid)
- title (string)
- description (string)
- date (datetime)
- location (string)

user_profile
- user_profile_id (uuid)
- first_name (string)
- last_name (string)
- email (string)
- password_salt (string)
- password_hash (string)

user_profile_to_event
- user_profile_id (uuid)
- event_id (uuid)
- rsvp_status (yes, no, undefined)
- additional_guests (number)

#### OPTIONAL/LATER: comment on events
comment_to_event
- user_profile_id (uuid)
- event_id
- comment_text

# User Flows
sign up with email & password
contact attendees