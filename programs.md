# Programs
GENERATED FOR TNI VERSION 0.11.2
[tena-employee-db](#tena-employee-db)  
[blobdb](#blobdb)  
[tena-meter-db](#tena-meter-db)  
[hypervisor-server](#hypervisor-server)  
[log-server](#log-server)  
[ten-bill-server](#ten-bill-server)  
[complaint-server2](#complaint-server2)  
[ten-public-portal](#ten-public-portal)  
[oauth-serv](#oauth-serv)  
[tmp-collabpoint1](#tmp-collabpoint1)  
[tena-calc-server](#tena-calc-server)  
[tena-gis-server](#tena-gis-server)  
[tena-staff-portal](#tena-staff-portal)  
[maintenance-server](#maintenance-server)  
[ten-scada-server](#ten-scada-server)  
[tena-mail](#tena-mail)  
[print-server](#print-server)  
[ubbt](#ubbt)  
[padu_v1](#padu_v1)  
[padu_v2](#padu_v2)  
[padu_v3](#padu_v3)  
[poems-db](#poems-db)  
[decentro-collector](#decentro-collector)  
[decentro-node](#decentro-node)  
[decentro-wallet](#decentro-wallet)  
[dns-server](#dns-server)  
[dns-lite](#dns-lite)  
[sun-dns](#sun-dns)  
[dnsmasq](#dnsmasq)  
[kea](#kea)  
[dnsspam](#dnsspam)  
[nop](#nop)  
[netpeeker](#netpeeker)  
[tnbmon](#tnbmon)  
[bladeos](#bladeos)  
[firewatcher](#firewatcher)  
[hakernel](#hakernel)  
[riserswfirm](#riserswfirm)  
[lbrr](#lbrr)  
[vlanfirm](#vlanfirm)  
[mbox](#mbox)  
[rtkernel](#rtkernel)  
[vrout3](#vrout3)  
[wirerat](#wirerat)  
[printer_edge](#printer_edge)  
[print-server](#print-server)  
[gitcoffee](#gitcoffee)  
[cctv_edge](#cctv_edge)  
[rtsp-diva-r](#rtsp-diva-r)  
[cctv_edge](#cctv_edge)  
[mailer](#mailer)  
[vonet_edge](#vonet_edge)  
[voip-server](#voip-server)  
[WORM ANNOYING_MORRIS](#worm-annoying_morris)  
[WORM HUSH](#worm-hush)

## tena-employee-db  
**CPU:** 3 **MEM:** 7 **SIZE:** 8  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 read-employee-data, post-employee-data (limited by 8)  
**Unlocked By:** [](#), [HR Officer](users.md/#hr-officer)  
  
  
## blobdb  
**CPU:** 4 **MEM:** 3 **SIZE:** 5  
  
**Description:**  
General blob storage server. Stores media files.  
Production is limited to 5 compatible uses on the device's use stack.  
  
  
  
## tena-meter-db  
**CPU:** 5 **MEM:** 3 **SIZE:** 6  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 post-meter-reading (limited by 8)  
**Unlocked By:** [ten-bill-server](#ten-bill-server), [Meter Reader I](users.md/#meter-reader-i)  
  
  
## hypervisor-server  
**CPU:** 20 **MEM:** 10 **SIZE:** 8  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 4 store-text  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 provision-vm (limited by 15)  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician)  
  
  
## log-server  
**CPU:** 5 **MEM:** 9 **SIZE:** 16  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 store-text  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 query-log-entry, store-log-entry (limited by 15)  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [ten-scada-server](#ten-scada-server), [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician), [IT Service](users.md/#it-service)  
  
  
## ten-bill-server  
**CPU:** 3 **MEM:** 9 **SIZE:** 3  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 read-meter-reading  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 post-invoice, verify-user (limited by 8)  
**Unlocks:** [padu_v2](#padu_v2), [tena-meter-db](#tena-meter-db)  
**Unlocked By:** [Billing Officer](users.md/#billing-officer)  
  
  
## complaint-server2  
**CPU:** 5 **MEM:** 9 **SIZE:** 3  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 2 ( read-text and post-text and verify-user )  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 read-complaint, post-complaint, store-complaint (limited by 15)  
**Unlocks:** [padu_v2](#padu_v2), [mailer](#mailer)  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Partner Gateway](users.md/#partner-gateway), [Public Gateway](users.md/#public-gateway), [Public Gateway](users.md/#public-gateway)  
  
  
## ten-public-portal  
**CPU:** 3 **MEM:** 3 **SIZE:** 4  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 2 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 post-news-updates, read-news-updates (limited by 8)  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Partner Gateway](users.md/#partner-gateway), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer)  
  
  
## oauth-serv  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
  
**Description:**  
Allows staff to login to internal portal.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 verify-user (limited by 15)  
**Unlocks:** [padu_v2](#padu_v2)  
  
  
## tmp-collabpoint1  
**CPU:** 5 **MEM:** 7 **SIZE:** 5  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 25 download-file, upload-file (limited by 25)  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Billing Officer](users.md/#billing-officer), [Analytics Officer](users.md/#analytics-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Legal Officer](users.md/#legal-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## tena-calc-server  
**CPU:** 15 **MEM:** 8 **SIZE:** 4  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 read-operation-data  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 10 verify-user, run-tenabolt-simulation, store-tenabolt-model (limited by 10)  
**Unlocks:** [padu_v2](#padu_v2), [ten-scada-server](#ten-scada-server)  
**Unlocked By:** [Analytics Officer](users.md/#analytics-officer), [R&D Engineer](users.md/#r&d-engineer)  
  
  
## tena-gis-server  
**CPU:** 16 **MEM:** 9 **SIZE:** 3  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 verify-user, store-geospatial-data, read-geospatial-data (limited by 8)  
**Unlocked By:** [maintenance-server](#maintenance-server), [Planning Officer](users.md/#planning-officer)  
  
  
## tena-staff-portal  
**CPU:** 5 **MEM:** 3 **SIZE:** 9  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 ( store-text or store-image )  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 post-news-updates, read-news-updates, verify-user (limited by 8)  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Normal Technician](users.md/#normal-technician), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## maintenance-server  
**CPU:** 3 **MEM:** 5 **SIZE:** 7  
  
**Description:**  
Serve to manages physical asset maintenance schedules and fault history.   
Coordinates field work orders for grid equipment.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 ( verify-user and store-geospatial-data and read-geospatial-data )  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 post-repair-workorder (limited by 8)  
**Unlocks:** [padu_v2](#padu_v2), [tena-gis-server](#tena-gis-server)  
**Unlocked By:** [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector)  
  
  
## ten-scada-server  
**CPU:** 16 **MEM:** 9 **SIZE:** 3  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 2 store-log-entry  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 8 verify-user, adjust-tenabolt-setpoint (limited by 8)  
**Unlocks:** [padu_v2](#padu_v2), [log-server](#log-server)  
**Unlocked By:** [tena-calc-server](#tena-calc-server), [Field Inspector](users.md/#field-inspector), [Grid Officer](users.md/#grid-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Night Grid Officer](users.md/#night-grid-officer)  
  
  
## tena-mail  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
  
**Description:**  
Provides exchange email usages to users.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 store-text and store-image  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 read-text, post-text, post-image, view-image, verify-user (limited by 15)  
**Unlocks:** [padu_v2](#padu_v2)  
  
  
## print-server  
**CPU:** 2 **MEM:** 1 **SIZE:** 4  
  
**Description:**  
Support printing services.  
Allows printer to be connected to produce print-text and print-image uses.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Finance Officer](users.md/#finance-officer), [HR Officer](users.md/#hr-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## ubbt  
**CPU:** 4 **MEM:** 4 **SIZE:** 6  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 4 inspect-user-packets  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 4 support-bots (limited by 4)  
  
  
## padu_v1  
**CPU:** 1 **MEM:** 2 **SIZE:** 4  
  
**Description:**  
Primary aggregation data unit. Supports text and image storage.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [dns-server](#dns-server), [sun-dns](#sun-dns), [kea](#kea), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway)  
  
  
## padu_v2  
**CPU:** 2 **MEM:** 4 **SIZE:** 8  
  
**Description:**  
Primary aggregation data unit. Supports text, image and audio storage.  
  
Improved disk handling algorithm.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [hypervisor-server](#hypervisor-server), [log-server](#log-server), [ten-bill-server](#ten-bill-server), [complaint-server2](#complaint-server2), [ten-public-portal](#ten-public-portal), [oauth-serv](#oauth-serv), [tmp-collabpoint1](#tmp-collabpoint1), [tena-calc-server](#tena-calc-server), [tena-staff-portal](#tena-staff-portal), [maintenance-server](#maintenance-server), [ten-scada-server](#ten-scada-server), [tena-mail](#tena-mail), [mailer](#mailer), [Partner Gateway](users.md/#partner-gateway), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway)  
  
  
## padu_v3  
**CPU:** 4 **MEM:** 6 **SIZE:** 12  
  
**Description:**  
Primary aggregation data unit. Supports text, image, audio and video storage.  
  
Improved disk handling algorithm.  
Production is limited to 4 compatible uses on the device's use stack.  
  
  
  
## poems-db  
**CPU:** 4 **MEM:** 4 **SIZE:** 6  
  
**Description:**  
Based text-based database. Supports text storage usage.  
Production is limited to 4 compatible uses on the device's use stack.  
  
  
  
## decentro-collector  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Collects decentro currencies over the network and accumulate them on the installed device.  
  
Produce target's use stack limit is 6 compatible uses per target's free memory.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 access-p2p-currency  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 1 access-p2p-currency (limited by TARGET_FREE_MEMORY)  
**Unlocked By:** [](#)  
  
  
## decentro-node  
**CPU:** 24 **MEM:** 12 **SIZE:** 6  
  
**Description:**  
Authenticate Decentro transactions. Decentro peers can connect to this program to perform peer-to-peer transactions. You may only spend decentro currencies that are accessible by decentro nodes.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** [](#)  
  
  
## decentro-wallet  
**CPU:** 1 **MEM:** 2 **SIZE:** 2  
  
**Description:**  
Safeguards your decentro currencies from power loss or unscheduled shutdown events.  
  
This program stores up to 10 'access-p2p-currency' compatible uses per free storage on device. Stored uses persists across device reboots.  
  
**Unlocked By:** [](#)  
**Modifiers:** 8  
  
  
## dns-server  
**CPU:** 4 **MEM:** 3 **SIZE:** 2+1=3  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 store-text  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 20 reply-dns-queries (limited by 20)  
**Unlocks:** [padu_v1](#padu_v1)  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Feed Signal](users.md/#feed-signal), [WireSync News](users.md/#wiresync-news), [Loyal Worker](users.md/#loyal-worker), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Full-time Coder](users.md/#full-time-coder), [Conservative Leader](users.md/#conservative-leader), [Liberal Announcer](users.md/#liberal-announcer), [Capitalistic Announcer](users.md/#capitalistic-announcer), [Scientific Professor](users.md/#scientific-professor), [Patient Professor](users.md/#patient-professor), [Tower Worker](users.md/#tower-worker), [Freelance Worker](users.md/#freelance-worker), [Neighbour Helper](users.md/#neighbour-helper), [Strategic Investor](users.md/#strategic-investor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Kanban Central](users.md/#kanban-central), [Booking Hub](users.md/#booking-hub), [Full Campus](users.md/#full-campus), [Night Campus](users.md/#night-campus), [Game Studios](users.md/#game-studios), [Tech Center](users.md/#tech-center), [All Supplies Center](users.md/#all-supplies-center), [Horror Studios](users.md/#horror-studios), [Travel Agency](users.md/#travel-agency), [Cheap Kitchen](users.md/#cheap-kitchen), [Database Hub](users.md/#database-hub), [Game Marketplace](users.md/#game-marketplace), [Film Sphere](users.md/#film-sphere), [Premium Kitchen](users.md/#premium-kitchen), [Telemedicine Hub](users.md/#telemedicine-hub), [Blogger Hub](users.md/#blogger-hub), [Book Club](users.md/#book-club), [Data Nexus](users.md/#data-nexus), [Data Hub](users.md/#data-hub), [Econ News](users.md/#econ-news), [Indie Studios](users.md/#indie-studios), [Free Kanban Central](users.md/#free-kanban-central), [Media Hub](users.md/#media-hub), [Music Sphere](users.md/#music-sphere), [Audio Sphere](users.md/#audio-sphere), [Political News](users.md/#political-news), [Religious Hub](users.md/#religious-hub), [Scientific News](users.md/#scientific-news), [Socialite Hub](users.md/#socialite-hub), [Finance Hub](users.md/#finance-hub), [Chatter Hive](users.md/#chatter-hive), [Mail Hub](users.md/#mail-hub), [Ads Agency](users.md/#ads-agency), [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Technician](users.md/#morning-technician), [Night Associate](users.md/#night-associate), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [People Operations](users.md/#people-operations), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer), [AI Researcher](users.md/#ai-researcher), [Chips Designer](users.md/#chips-designer), [Professional Gamer](users.md/#professional-gamer), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower), [Animation Sphere](users.md/#animation-sphere), [Animation Studios](users.md/#animation-studios), [Central Mart](users.md/#central-mart), [ESport Hub](users.md/#esport-hub), [Happy Grocery](users.md/#happy-grocery), [Inventory Hub](users.md/#inventory-hub), [Transfer Hub](users.md/#transfer-hub), [Meeting Hub](users.md/#meeting-hub), [Antivirus Nexus](users.md/#antivirus-nexus), [Privacy Hub](users.md/#privacy-hub)  
**Modifiers:** 5  
  
  
## dns-lite  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
  
**Description:**  
Replies network-addresses to DNS queries.  
Production is limited to 3 compatible uses on the device's use stack.  
  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Net Nester](users.md/#net-nester), [Bobby Tester](users.md/#bobby-tester), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Scientific Professor](users.md/#scientific-professor), [Patient Professor](users.md/#patient-professor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Helper Central](users.md/#helper-central), [Go Delivery Hub](users.md/#go-delivery-hub), [Cyber Mall](users.md/#cyber-mall), [Cloud Hub](users.md/#cloud-hub), [Tower Portal](users.md/#tower-portal), [Software Nexus](users.md/#software-nexus), [Utilities Sphere](users.md/#utilities-sphere), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [People Operations](users.md/#people-operations), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway), [Professional Gamer](users.md/#professional-gamer), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower)  
**Modifiers:** 5  
  
  
## sun-dns  
**CPU:** 10 **MEM:** 6 **SIZE:** 8+1=9  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 store-text  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 40 reply-dns-queries (limited by 40)  
**Unlocks:** [padu_v1](#padu_v1)  
**Modifiers:** 5  
  
  
## dnsmasq  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
  
**Description:**  
Automatically assigns network addresses and designated DNS server to network devices.  
Production is limited to 3 compatible uses on the device's use stack.  
  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Net Nester](users.md/#net-nester), [Bobby Tester](users.md/#bobby-tester), [Casual Dweller](users.md/#casual-dweller), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [People Operations](users.md/#people-operations), [Public Gateway](users.md/#public-gateway), [Indoor Dweller](users.md/#indoor-dweller)  
**Modifiers:** 6  
  
  
## kea  
**CPU:** 6 **MEM:** 5 **SIZE:** 6+1=7  
  
**Description:**  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 store-text  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 reply-dhcp-request (limited by 15)  
**Unlocks:** [padu_v1](#padu_v1)  
**Modifiers:** 6  
  
  
## dnsspam  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
DNS load test software.  
  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 reply-dns-queries  
  
  
## nop  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Generic program.  
  
  
  
## netpeeker  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Remote debugger.  
  
**Modifiers:** 0  
  
  
## tnbmon  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Power meter firmware.  
  
  
  
## bladeos  
**CPU:** 2 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Network switch firmware.  
  
**Modifiers:** 1  
  
  
## firewatcher  
**CPU:** 4 **MEM:** 1 **SIZE:** 1+1=2  
  
**Description:**  
Firewall operating system; performs packet filtering.  
  
**Modifiers:** 4  
  
  
## hakernel  
**CPU:** 4 **MEM:** 2 **SIZE:** 1+1=2  
  
**Description:**  
HA-enabled port grouping kernel.  
  
**Modifiers:** 2, 7  
  
  
## riserswfirm  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Riser switch firmware.  
  
**Modifiers:** 1  
  
  
## lbrr  
**CPU:** 2 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
Round-robin network load balancer.  
  
**Modifiers:** 11  
  
  
## vlanfirm  
**CPU:** 2 **MEM:** 2 **SIZE:** 1+1=2  
  
**Description:**  
Managed switch firmware.  
  
**Modifiers:** 10, 12  
  
  
## mbox  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
  
**Description:**  
Network middlebox program. Configure with the "middlebox" command.  
  
Allows packet mangling/translation. Install on a device to make it a network middlebox.  
  
**Modifiers:** 13  
  
  
## rtkernel  
**CPU:** 4 **MEM:** 1 **SIZE:** 1+1=2  
  
**Description:**  
Packet routing program.  
  
**Modifiers:** 2  
  
  
## vrout3  
**CPU:** 4 **MEM:** 1 **SIZE:** 2+2=4  
  
**Description:**  
Packet routing with VLAN subinterfaces.  
  
**Modifiers:** 2, 10  
  
  
## wirerat  
**CPU:** 2 **MEM:** 2 **SIZE:** 1  
  
**Description:**  
Packet monitoring system.  
Production is limited to 4 compatible uses per device's installed memory.  
  
**Modifiers:** 3, 1  
  
  
## printer_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
printer firmware.  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 accept-printer-connection  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 1 print-image, print-text (limited by TARGET_TOTAL_CPU)  
  
  
## print-server  
**CPU:** 5 **MEM:** 3 **SIZE:** 5  
  
**Description:**  
Support printing services.  
  
Allows printer to be connected to produce print-text and print-image uses.  
Production is limited to 13 compatible uses on the device's use stack.  
  
**Unlocked By:** [Billing Officer](users.md/#billing-officer), [Analytics Officer](users.md/#analytics-officer), [Grid Officer](users.md/#grid-officer), [Legal Officer](users.md/#legal-officer)  
  
  
## gitcoffee  
**CPU:** 4 **MEM:** 2 **SIZE:** 4  
  
**Description:**  
open-source software repository. Supports software-updates requests.  
  
Produce target's use stack limit is 16 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 2 store-text  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 16 read-text, update-software (limited by 16)  
**Unlocked By:** [](#), [](#)  
  
  
## cctv_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
cctv camera firmware  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 accept-cctv-camera-connection  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 1 stream-live-video (limited by TARGET_TOTAL_CPU)  
  
  
## rtsp-diva-r  
**CPU:** 6 **MEM:** 4 **SIZE:** 10  
  
**Description:**  
Support surveillance monitoring services.  
  
Allows surveillance accessories to be connected to produce stream-live-video uses.  
Production is limited to 13 compatible uses on the device's use stack.  
  
**Unlocked By:** [Loyal Worker](users.md/#loyal-worker), [Tower Worker](users.md/#tower-worker), [Freelance Worker](users.md/#freelance-worker), [Neighbour Helper](users.md/#neighbour-helper), [Strategic Investor](users.md/#strategic-investor)  
  
  
## cctv_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
cctv camera firmware  
  
Produce target's use stack limit is 1 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 accept-cctv-monitor-connection  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 1 stream-live-video (limited by 1)  
  
  
## mailer  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
  
**Description:**  
Provides exchange email usages to users.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 3 ( store-text and store-image )  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 15 read-text, post-text, verify-user (limited by 15)  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [complaint-server2](#complaint-server2), [](#), [](#), [Billing Officer](users.md/#billing-officer), [Customer Officer](users.md/#customer-officer), [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Associate](users.md/#night-associate), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## vonet_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Description:**  
VOIP phone firmware.  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**$\color{PapayaWhip}{\textsf{Consumes:}}$** 1 accept-voip-phone-connection  
**$\color{DarkKhaki}{\textsf{Produces:}}$** 1 stream-voice (limited by TARGET_TOTAL_CPU)  
  
  
## voip-server  
**CPU:** 5 **MEM:** 2 **SIZE:** 5  
  
**Description:**  
Supports Voice over Internet Protocol for streaming voice messages phones.  
  
Allows voip phones to be connected to produce stream-voice uses.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** [](#), [Media Maniac](users.md/#media-maniac), [Vocal Connector](users.md/#vocal-connector), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Private Dweller](users.md/#private-dweller), [Full-time Coder](users.md/#full-time-coder), [Conservative Leader](users.md/#conservative-leader), [Liberal Announcer](users.md/#liberal-announcer), [Capitalistic Announcer](users.md/#capitalistic-announcer), [Scifi Movie Director](users.md/#scifi-movie-director), [Audio Lover](users.md/#audio-lover), [Scientific Professor](users.md/#scientific-professor), [Decentro Farmer](users.md/#decentro-farmer), [Home Chef](users.md/#home-chef), [Lifestyle Blogger](users.md/#lifestyle-blogger), [Digital Salesman](users.md/#digital-salesman), [Night Chatter](users.md/#night-chatter), [Pet Lover](users.md/#pet-lover), [Secondhand Buyer](users.md/#secondhand-buyer), [Vocal Connector](users.md/#vocal-connector), [Patient Professor](users.md/#patient-professor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Malicious User](users.md/#malicious-user), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Recycling Center](users.md/#recycling-center), [Tech Center](users.md/#tech-center), [All Supplies Center](users.md/#all-supplies-center), [Cheap Kitchen](users.md/#cheap-kitchen), [Premium Kitchen](users.md/#premium-kitchen), [Horror Director](users.md/#horror-director), [Ads Agency](users.md/#ads-agency), [Research Hub](users.md/#research-hub), [Surveillance Hub](users.md/#surveillance-hub), [Normal Associate](users.md/#normal-associate), [Sales Officer](users.md/#sales-officer), [Professional Gamer](users.md/#professional-gamer), [Binge Watcher](users.md/#binge-watcher), [Jazz Lover](users.md/#jazz-lover), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower), [Semiconductor Hub](users.md/#semiconductor-hub)  
  
  
## WORM ANNOYING_MORRIS  
**CPU:** 0 **MEM:** 0 **SIZE:** 0  
  
**Description:**  
ANNOYING_MORRIS spreads itself across routers and servers using traffic types ranging from TCP/510 to TCP/519. It doesn't do any harm to its targets but wastes the bandwidth of the devices it traverses.  
  
**Vulnerable Devices:** NETWORK_ROUTER, COMPUTE_SERVER  
  
  
## WORM HUSH  
**CPU:** 0 **MEM:** 0 **SIZE:** 0  
  
**Description:**  
HUSH targets VOIP phones and servers using SIP traffic (UDP/5060). Upon infection, it silently erases all other programs installed on the device.  
  
**Vulnerable Devices:** PHONE, COMPUTE_SERVER  
  
