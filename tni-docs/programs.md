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

## tena-employee-db<a name="tena-employee-db"></a>  
**CPU:** 3 **MEM:** 7 **SIZE:** 8  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text and store-image` @ `tcp/3306` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `read-employee-data, post-employee-data` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Stores employee data.   
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** ACCESS DATABASE, [HR Officer](users.md/#hr-officer)  
  
  
## blobdb<a name="blobdb"></a>  
**CPU:** 4 **MEM:** 3 **SIZE:** 5  
**<span style="color:DarkKhaki;">Produces:</span>** 5 `store-image, store-video, store-audio, store-text` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 5)</span>  
  
  
**Description:**  
General blob storage server. Stores media files.  
Production is limited to 5 compatible uses on the device's use stack.  
  
  
  
## tena-meter-db<a name="tena-meter-db"></a>  
**CPU:** 5 **MEM:** 3 **SIZE:** 6  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text and store-image` @ `tcp/3306` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-meter-reading` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Allow meter reader to stores meter reading data.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** [ten-bill-server](#ten-bill-server), [Meter Reader I](users.md/#meter-reader-i)  
  
  
## hypervisor-server<a name="hypervisor-server"></a>  
**CPU:** 20 **MEM:** 10 **SIZE:** 8  
**<span style="color:PapayaWhip;">Consumes:</span>** 4 `store-text` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `provision-vm` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Provisions and allocates virtual compute resources for monitoring and scaling.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician)  
  
  
## log-server<a name="log-server"></a>  
**CPU:** 5 **MEM:** 9 **SIZE:** 16  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text` @ `tcp/3306` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `query-log-entry, store-log-entry` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Event log storage. Records and searches system activity.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [ten-scada-server](#ten-scada-server), [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician), [IT Service](users.md/#it-service)  
  
  
## ten-bill-server<a name="ten-bill-server"></a>  
**CPU:** 3 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `read-meter-reading` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-invoice, verify-user` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Enables Billing Staff to generate and post invoices to residents based on recorded consumption data.  
<span style="color:red;">Requires meter readings submitted by Meter Readers.</span>  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [tena-meter-db](#tena-meter-db)  
**Unlocked By:** [Billing Officer](users.md/#billing-officer)  
  
  
## complaint-server2<a name="complaint-server2"></a>  
**CPU:** 5 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `( read-text and post-text and verify-user )` @ `tcp/25` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `read-complaint, post-complaint, store-complaint` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Allows customers to submit complaints and customer service to manage and respond to tickets.  
<span style="color:red;">Requires access to a running mail server</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [mailer](#mailer)  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Partner Gateway](users.md/#partner-gateway), [Public Gateway](users.md/#public-gateway), [Public Gateway](users.md/#public-gateway)  
  
  
## ten-public-portal<a name="ten-public-portal"></a>  
**CPU:** 3 **MEM:** 3 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `store-text and store-image` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-news-updates, read-news-updates` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Publishes outage updates and company news for public viewing.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Partner Gateway](users.md/#partner-gateway), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer)  
  
  
## oauth-serv<a name="oauth-serv"></a>  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `verify-user` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Allows staff to login to internal portal.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
  
  
## tmp-collabpoint1<a name="tmp-collabpoint1"></a>  
**CPU:** 5 **MEM:** 7 **SIZE:** 5  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 25 `download-file, upload-file` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 25)</span>  
  
  
**Description:**  
Allows media sharing among staff.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 25 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Billing Officer](users.md/#billing-officer), [Analytics Officer](users.md/#analytics-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Legal Officer](users.md/#legal-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## tena-calc-server<a name="tena-calc-server"></a>  
**CPU:** 15 **MEM:** 8 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `read-operation-data` @ `tcp/3306` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `verify-user, run-tenabolt-simulation, store-tenabolt-model` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Serve as nuclear plant calculation application. Engineers run simulations and save models.  
<span style="color:red;">Requiring grid officer to perform scada operations.</span>  
  
  
Produce target's use stack limit is 10 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [ten-scada-server](#ten-scada-server)  
**Unlocked By:** [Analytics Officer](users.md/#analytics-officer), [R&D Engineer](users.md/#r&d-engineer)  
  
  
## tena-gis-server<a name="tena-gis-server"></a>  
**CPU:** 16 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `verify-user, store-geospatial-data, read-geospatial-data` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve as Geographic information system. Maps grid infrastructure, customer zones, and candidate sites for expansion.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** [maintenance-server](#maintenance-server), [Planning Officer](users.md/#planning-officer)  
  
  
## tena-staff-portal<a name="tena-staff-portal"></a>  
**CPU:** 5 **MEM:** 3 **SIZE:** 9  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `( store-text or store-image )` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-news-updates, read-news-updates, verify-user` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve landing page for staff internally for company resources and announcement.   
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Normal Technician](users.md/#normal-technician), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## maintenance-server<a name="maintenance-server"></a>  
**CPU:** 3 **MEM:** 5 **SIZE:** 7  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `( verify-user and store-geospatial-data and read-geospatial-data )` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-repair-workorder` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve to manages physical asset maintenance schedules and fault history.   
Coordinates field work orders for grid equipment.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [tena-gis-server](#tena-gis-server)  
**Unlocked By:** [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector)  
  
  
## ten-scada-server<a name="ten-scada-server"></a>  
**CPU:** 16 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `store-log-entry` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `verify-user, adjust-tenabolt-setpoint` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve as real-time supervisory control and data acquisition system for grid operations.  
<span style="color:red;">Requires access to a running log server</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [log-server](#log-server)  
**Unlocked By:** [tena-calc-server](#tena-calc-server), [Field Inspector](users.md/#field-inspector), [Grid Officer](users.md/#grid-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Night Grid Officer](users.md/#night-grid-officer)  
  
  
## tena-mail<a name="tena-mail"></a>  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ `tcp/5432` for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `read-text, post-text, post-image, view-image, verify-user` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Provides exchange email usages to users.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
  
  
## print-server<a name="print-server"></a>  
**CPU:** 2 **MEM:** 1 **SIZE:** 4  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `accept-printer-connection` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Support printing services.  
Allows printer to be connected to produce print-text and print-image uses.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Finance Officer](users.md/#finance-officer), [HR Officer](users.md/#hr-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## ubbt<a name="ubbt"></a>  
**CPU:** 4 **MEM:** 4 **SIZE:** 6  
**<span style="color:PapayaWhip;">Consumes:</span>** 4 `inspect-user-packets` @ `udp/6343` for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `support-bots` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
Analyzes user traffic behavior from a network tap to support botnet operations.  
  
<span style="color:red;">Requires access to a network tap with user traffic</span>.  
  
Produce target's use stack limit is 4 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## padu_v1<a name="padu_v1"></a>  
**CPU:** 1 **MEM:** 2 **SIZE:** 4  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `store-text, store-image` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Primary aggregation data unit. Supports text and image storage.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [dns-server](#dns-server), [sun-dns](#sun-dns), [kea](#kea), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway)  
  
  
## padu_v2<a name="padu_v2"></a>  
**CPU:** 2 **MEM:** 4 **SIZE:** 8  
**<span style="color:DarkKhaki;">Produces:</span>** 2 `store-text, store-image, store-audio` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Primary aggregation data unit. Supports text, image and audio storage.  
  
Improved disk handling algorithm.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [hypervisor-server](#hypervisor-server), [log-server](#log-server), [ten-bill-server](#ten-bill-server), [complaint-server2](#complaint-server2), [ten-public-portal](#ten-public-portal), [oauth-serv](#oauth-serv), [tmp-collabpoint1](#tmp-collabpoint1), [tena-calc-server](#tena-calc-server), [tena-staff-portal](#tena-staff-portal), [maintenance-server](#maintenance-server), [ten-scada-server](#ten-scada-server), [tena-mail](#tena-mail), [mailer](#mailer), [Partner Gateway](users.md/#partner-gateway), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway)  
  
  
## padu_v3<a name="padu_v3"></a>  
**CPU:** 4 **MEM:** 6 **SIZE:** 12  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `store-text, store-image, store-audio, store-video` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
Primary aggregation data unit. Supports text, image, audio and video storage.  
  
Improved disk handling algorithm.  
Production is limited to 4 compatible uses on the device's use stack.  
  
  
  
## poems-db<a name="poems-db"></a>  
**CPU:** 4 **MEM:** 4 **SIZE:** 6  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `store-text` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
Based text-based database. Supports text storage usage.  
Production is limited to 4 compatible uses on the device's use stack.  
  
  
  
## decentro-collector<a name="decentro-collector"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `access-p2p-currency` @ `tcp/8333` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `access-p2p-currency` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_FREE_MEMORY)</span>  
  
  
**Description:**  
Collects decentro currencies over the network and accumulate them on the installed device.  
  
Produce target's use stack limit is 6 compatible uses per target's free memory.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** SEND DECENTRO  
  
  
## decentro-node<a name="decentro-node"></a>  
**CPU:** 24 **MEM:** 12 **SIZE:** 6  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Authenticate Decentro transactions. Decentro peers can connect to this program to perform peer-to-peer transactions. You may only spend decentro currencies that are accessible by decentro nodes.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** SEND DECENTRO  
  
  
## decentro-wallet<a name="decentro-wallet"></a>  
**CPU:** 1 **MEM:** 2 **SIZE:** 2  
  
**Modifiers:** ALLOW_DECENTRO_STORAGE  
  
**Description:**  
Safeguards your decentro currencies from power loss or unscheduled shutdown events.  
  
This program stores up to 10 'access-p2p-currency' compatible uses per free storage on device. Stored uses persists across device reboots.  
  
**Unlocked By:** SEND DECENTRO  
  
  
## dns-server<a name="dns-server"></a>  
**CPU:** 4 **MEM:** 3 **SIZE:** 2+1=3  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text` @ `tcp/3306` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 20 `reply-dns-queries` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 20)</span>  
  
**Modifiers:** ALLOW_DOMAIN_QUERYING  
  
**Description:**  
Replies network-addresses to DNS queries.   
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 20 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v1](#padu_v1)  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Feed Signal](users.md/#feed-signal), [WireSync News](users.md/#wiresync-news), [Loyal Worker](users.md/#loyal-worker), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Full-time Coder](users.md/#full-time-coder), [Conservative Leader](users.md/#conservative-leader), [Liberal Announcer](users.md/#liberal-announcer), [Capitalistic Announcer](users.md/#capitalistic-announcer), [Scientific Professor](users.md/#scientific-professor), [Patient Professor](users.md/#patient-professor), [Tower Worker](users.md/#tower-worker), [Freelance Worker](users.md/#freelance-worker), [Neighbour Helper](users.md/#neighbour-helper), [Strategic Investor](users.md/#strategic-investor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Kanban Central](users.md/#kanban-central), [Booking Hub](users.md/#booking-hub), [Full Campus](users.md/#full-campus), [Night Campus](users.md/#night-campus), [Game Studios](users.md/#game-studios), [Tech Center](users.md/#tech-center), [All Supplies Center](users.md/#all-supplies-center), [Horror Studios](users.md/#horror-studios), [Travel Agency](users.md/#travel-agency), [Cheap Kitchen](users.md/#cheap-kitchen), [Database Hub](users.md/#database-hub), [Game Marketplace](users.md/#game-marketplace), [Film Sphere](users.md/#film-sphere), [Premium Kitchen](users.md/#premium-kitchen), [Telemedicine Hub](users.md/#telemedicine-hub), [Blogger Hub](users.md/#blogger-hub), [Book Club](users.md/#book-club), [Data Nexus](users.md/#data-nexus), [Data Hub](users.md/#data-hub), [Econ News](users.md/#econ-news), [Indie Studios](users.md/#indie-studios), [Free Kanban Central](users.md/#free-kanban-central), [Media Hub](users.md/#media-hub), [Music Sphere](users.md/#music-sphere), [Audio Sphere](users.md/#audio-sphere), [Political News](users.md/#political-news), [Religious Hub](users.md/#religious-hub), [Scientific News](users.md/#scientific-news), [Socialite Hub](users.md/#socialite-hub), [Finance Hub](users.md/#finance-hub), [Chatter Hive](users.md/#chatter-hive), [Mail Hub](users.md/#mail-hub), [Ads Agency](users.md/#ads-agency), [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Technician](users.md/#morning-technician), [Night Associate](users.md/#night-associate), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [People Operations](users.md/#people-operations), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer), [AI Researcher](users.md/#ai-researcher), [Chips Designer](users.md/#chips-designer), [Professional Gamer](users.md/#professional-gamer), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower), [Animation Sphere](users.md/#animation-sphere), [Animation Studios](users.md/#animation-studios), [Central Mart](users.md/#central-mart), [ESport Hub](users.md/#esport-hub), [Happy Grocery](users.md/#happy-grocery), [Inventory Hub](users.md/#inventory-hub), [Transfer Hub](users.md/#transfer-hub), [Meeting Hub](users.md/#meeting-hub), [Antivirus Nexus](users.md/#antivirus-nexus), [Privacy Hub](users.md/#privacy-hub)  
  
  
## dns-lite<a name="dns-lite"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
**<span style="color:DarkKhaki;">Produces:</span>** 3 `reply-dns-queries` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 3)</span>  
  
**Modifiers:** ALLOW_DOMAIN_QUERYING  
  
**Description:**  
Replies network-addresses to DNS queries.  
Production is limited to 3 compatible uses on the device's use stack.  
  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Net Nester](users.md/#net-nester), [Bobby Tester](users.md/#bobby-tester), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Scientific Professor](users.md/#scientific-professor), [Patient Professor](users.md/#patient-professor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Helper Central](users.md/#helper-central), [Go Delivery Hub](users.md/#go-delivery-hub), [Cyber Mall](users.md/#cyber-mall), [Cloud Hub](users.md/#cloud-hub), [Tower Portal](users.md/#tower-portal), [Software Nexus](users.md/#software-nexus), [Utilities Sphere](users.md/#utilities-sphere), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [People Operations](users.md/#people-operations), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway), [Professional Gamer](users.md/#professional-gamer), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower)  
  
  
## sun-dns<a name="sun-dns"></a>  
**CPU:** 10 **MEM:** 6 **SIZE:** 8+1=9  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text` @ `tcp/3306` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 40 `reply-dns-queries` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 40)</span>  
  
**Modifiers:** ALLOW_DOMAIN_QUERYING  
  
**Description:**  
Enterprise grade DNS server.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 40 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v1](#padu_v1)  
  
  
## dnsmasq<a name="dnsmasq"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
**<span style="color:DarkKhaki;">Produces:</span>** 3 `reply-dhcp-request` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 3)</span>  
  
**Modifiers:** ALLOW_REMOTE_HOST_CONFIGURATION  
  
**Description:**  
Automatically assigns network addresses and designated DNS server to network devices.  
Production is limited to 3 compatible uses on the device's use stack.  
  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Net Nester](users.md/#net-nester), [Bobby Tester](users.md/#bobby-tester), [Casual Dweller](users.md/#casual-dweller), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [People Operations](users.md/#people-operations), [Public Gateway](users.md/#public-gateway), [Indoor Dweller](users.md/#indoor-dweller)  
  
  
## kea<a name="kea"></a>  
**CPU:** 6 **MEM:** 5 **SIZE:** 6+1=7  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text` @ `tcp/3306` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `reply-dhcp-request` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
**Modifiers:** ALLOW_REMOTE_HOST_CONFIGURATION  
  
**Description:**  
Automatically assigns network addresses and designated DNS server to network devices.  
  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v1](#padu_v1)  
  
  
## dnsspam<a name="dnsspam"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `reply-dns-queries` @ `udp/53` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
  
  
**Description:**  
DNS load test software.  
  
  
  
  
## nop<a name="nop"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
  
**Description:**  
Generic program.  
  
  
  
## netpeeker<a name="netpeeker"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_REMOTE_DEBUGGING  
  
**Description:**  
Remote debugger.  
  
  
  
## tnbmon<a name="tnbmon"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
  
**Description:**  
Power meter firmware.  
  
  
  
## bladeos<a name="bladeos"></a>  
**CPU:** 2 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_PACKET_SWITCHING  
  
**Description:**  
Network switch firmware.  
  
  
  
## firewatcher<a name="firewatcher"></a>  
**CPU:** 4 **MEM:** 1 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_FILTERING  
  
**Description:**  
Firewall operating system; performs packet filtering.  
  
  
  
## hakernel<a name="hakernel"></a>  
**CPU:** 4 **MEM:** 2 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_ROUTING, ALLOW_HIGH_AVAILABILITY_SETUP  
  
**Description:**  
HA-enabled port grouping kernel.  
  
  
  
## riserswfirm<a name="riserswfirm"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_PACKET_SWITCHING  
  
**Description:**  
Riser switch firmware.  
  
  
  
## lbrr<a name="lbrr"></a>  
**CPU:** 2 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_TRAFFIC_SPLITTING  
  
**Description:**  
Round-robin network load balancer.  
  
  
  
## vlanfirm<a name="vlanfirm"></a>  
**CPU:** 2 **MEM:** 2 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_VLAN_TAGGING, ALLOW_STP_PORT_CONTROL  
  
**Description:**  
Managed switch firmware.  
  
  
  
## mbox<a name="mbox"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_TRANSLATION  
  
**Description:**  
Network middlebox program. Configure with the "middlebox" command.  
  
Allows packet mangling/translation. Install on a device to make it a network middlebox.  
  
  
  
## rtkernel<a name="rtkernel"></a>  
**CPU:** 4 **MEM:** 1 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_ROUTING  
  
**Description:**  
Packet routing program.  
  
  
  
## vrout3<a name="vrout3"></a>  
**CPU:** 4 **MEM:** 1 **SIZE:** 2+2=4  
  
**Modifiers:** ALLOW_PACKET_ROUTING, ALLOW_VLAN_TAGGING  
  
**Description:**  
Packet routing with VLAN subinterfaces.  
  
  
  
## wirerat<a name="wirerat"></a>  
**CPU:** 2 **MEM:** 2 **SIZE:** 1  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `inspect-user-packets` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_MEM)</span>  
  
**Modifiers:** ALLOW_PACKET_INSPECTION, ALLOW_PACKET_SWITCHING  
  
**Description:**  
Packet monitoring system.  
Production is limited to 4 compatible uses per device's installed memory.  
  
  
  
## printer_edge<a name="printer_edge"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:LightCoral;">Required Hardware:</span>** PRINTER  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-printer-connection` @ `tcp/631` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `print-image, print-text` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_CPU)</span>  
  
  
**Description:**  
printer firmware.  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## print-server<a name="print-server"></a>  
**CPU:** 5 **MEM:** 3 **SIZE:** 5  
**<span style="color:DarkKhaki;">Produces:</span>** 13 `accept-printer-connection` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 13)</span>  
  
  
**Description:**  
Support printing services.  
  
Allows printer to be connected to produce print-text and print-image uses.  
Production is limited to 13 compatible uses on the device's use stack.  
  
**Unlocked By:** [Billing Officer](users.md/#billing-officer), [Analytics Officer](users.md/#analytics-officer), [Grid Officer](users.md/#grid-officer), [Legal Officer](users.md/#legal-officer)  
  
  
## gitcoffee<a name="gitcoffee"></a>  
**CPU:** 4 **MEM:** 2 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `store-text` @ `tcp/5432` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 16 `read-text, update-software` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 16)</span>  
  
  
**Description:**  
open-source software repository. Supports software-updates requests.  
  
Produce target's use stack limit is 16 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** SOFTWARE UPDATES, SOFTWARE UPDATES  
  
  
## cctv_edge<a name="cctv_edge"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:LightCoral;">Required Hardware:</span>** CCTV  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-cctv-camera-connection` @ `udp/554` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `stream-live-video` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_CPU)</span>  
  
  
**Description:**  
cctv camera firmware  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## rtsp-diva-r<a name="rtsp-diva-r"></a>  
**CPU:** 6 **MEM:** 4 **SIZE:** 10  
**<span style="color:DarkKhaki;">Produces:</span>** 13 `accept-cctv-camera-connection, accept-cctv-monitor-connection` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 13)</span>  
  
  
**Description:**  
Support surveillance monitoring services.  
  
Allows surveillance accessories to be connected to produce stream-live-video uses.  
Production is limited to 13 compatible uses on the device's use stack.  
  
**Unlocked By:** [Loyal Worker](users.md/#loyal-worker), [Tower Worker](users.md/#tower-worker), [Freelance Worker](users.md/#freelance-worker), [Neighbour Helper](users.md/#neighbour-helper), [Strategic Investor](users.md/#strategic-investor)  
  
  
## cctv_edge<a name="cctv_edge"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-cctv-monitor-connection` @ `tcp/554` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `stream-live-video` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 1)</span>  
  
  
**Description:**  
cctv camera firmware  
  
Produce target's use stack limit is 1 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## mailer<a name="mailer"></a>  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `( store-text and store-image )` @ `tcp/5432` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `read-text, post-text, verify-user` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Provides exchange email usages to users.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [complaint-server2](#complaint-server2), EXCHANGE EMAIL, EXCHANGE EMAIL, [Billing Officer](users.md/#billing-officer), [Customer Officer](users.md/#customer-officer), [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Associate](users.md/#night-associate), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [Sales Officer](users.md/#sales-officer)  
  
  
## vonet_edge<a name="vonet_edge"></a>  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:LightCoral;">Required Hardware:</span>** PHONE  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-voip-phone-connection` @ `udp/5060` for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `stream-voice` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_CPU)</span>  
  
  
**Description:**  
VOIP phone firmware.  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## voip-server<a name="voip-server"></a>  
**CPU:** 5 **MEM:** 2 **SIZE:** 5  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `accept-voip-phone-connection` <span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Supports Voice over Internet Protocol for streaming voice messages phones.  
  
Allows voip phones to be connected to produce stream-voice uses.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** TALK TO SOMEONE ONLINE, [Media Maniac](users.md/#media-maniac), [Vocal Connector](users.md/#vocal-connector), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Private Dweller](users.md/#private-dweller), [Full-time Coder](users.md/#full-time-coder), [Conservative Leader](users.md/#conservative-leader), [Liberal Announcer](users.md/#liberal-announcer), [Capitalistic Announcer](users.md/#capitalistic-announcer), [Scifi Movie Director](users.md/#scifi-movie-director), [Audio Lover](users.md/#audio-lover), [Scientific Professor](users.md/#scientific-professor), [Decentro Farmer](users.md/#decentro-farmer), [Home Chef](users.md/#home-chef), [Lifestyle Blogger](users.md/#lifestyle-blogger), [Digital Salesman](users.md/#digital-salesman), [Night Chatter](users.md/#night-chatter), [Pet Lover](users.md/#pet-lover), [Secondhand Buyer](users.md/#secondhand-buyer), [Vocal Connector](users.md/#vocal-connector), [Patient Professor](users.md/#patient-professor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Malicious User](users.md/#malicious-user), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Recycling Center](users.md/#recycling-center), [Tech Center](users.md/#tech-center), [All Supplies Center](users.md/#all-supplies-center), [Cheap Kitchen](users.md/#cheap-kitchen), [Premium Kitchen](users.md/#premium-kitchen), [Horror Director](users.md/#horror-director), [Ads Agency](users.md/#ads-agency), [Research Hub](users.md/#research-hub), [Surveillance Hub](users.md/#surveillance-hub), [Normal Associate](users.md/#normal-associate), [Sales Officer](users.md/#sales-officer), [Professional Gamer](users.md/#professional-gamer), [Binge Watcher](users.md/#binge-watcher), [Jazz Lover](users.md/#jazz-lover), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower), [Semiconductor Hub](users.md/#semiconductor-hub)  
  
  
## WORM ANNOYING_MORRIS<a name="worm-annoying_morris"></a>  
**CPU:** 0 **MEM:** 0 **SIZE:** 0  
**Vulnerable Devices:** NETWORK_ROUTER, COMPUTE_SERVER  
**Incubation Cycles:** 5  
**Spread per tick:** 1  
  
  
**Description:**  
ANNOYING_MORRIS spreads itself across routers and servers using traffic types ranging from TCP/510 to TCP/519. It doesn't do any harm to its targets but wastes the bandwidth of the devices it traverses.  
  
  
  
## WORM HUSH<a name="worm-hush"></a>  
**CPU:** 0 **MEM:** 0 **SIZE:** 0  
**Vulnerable Devices:** PHONE, COMPUTE_SERVER  
**Incubation Cycles:** 3  
**Spread per tick:** 3  
  
  
**Description:**  
HUSH targets VOIP phones and servers using SIP traffic (UDP/5060). Upon infection, it silently erases all other programs installed on the device.  
  
  
