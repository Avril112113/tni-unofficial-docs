---
nav_order: 3
parent: Data
permalink: /data/users
---

# Users
{: .no_toc }
GENERATED FOR TNI VERSION 0.11.4

- TOC
{:toc}


## Media Maniac  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A tower dweller who just loves to browse media content.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite), [dnsmasq](programs.md/#dnsmasq), [dns-server](programs.md/#dns-server), [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 50% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **BROWSE MEDIA CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** addictive  
  
  
## Net Nester  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A humble tower dweller who just wants to go online.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite), [dnsmasq](programs.md/#dnsmasq)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ AND COMMENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text and post-text`  
- <span style="color:Yellow;">Use:</span> **READ POLITICAL NEWS** 60% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text and view-image and stream-video and stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** news-update, political  
  
  
## Vocal Connector  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A tower dweller who just loves to voice message to their peers.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Feed Signal  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A media company that hosts their site on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostMediaContent**  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-video`  
  **Scaling:** Static?=8-13  
  **Description:** a media platform  
  
  
## WireSync News  
**Grace Days:** 8  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A news company that hosts their site on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostNewsReading**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, stream-video, stream-audio`  
  **Scaling:** Survey  
  **Description:** text-based political news site  
- <span style="color:Aqua;">Host:</span> **HostTextForum**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text`  
  **Scaling:** Visitors  
  **Description:** a simple text-based forum  
  
  
## Sync News  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A news company that hosts their site on-premise.  
  
**Unlocks:**   
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostNewsReading**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, stream-video, stream-audio`  
  **Scaling:** Survey  
  **Description:** text-based political news site  
- <span style="color:Aqua;">Host:</span> **HostTextForum**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text`  
  **Scaling:** Visitors  
  **Description:** a simple text-based forum  
  
  
## Sync News  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A news company that hosts their site on-premise.  
  
**Unlocks:**   
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostNewsReading**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, stream-video, stream-audio`  
  **Scaling:** Survey  
  **Description:** text-based political news site  
  
  
## Bobby Tester  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Bobby tester  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite), [dnsmasq](programs.md/#dnsmasq)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **GENERIC PROGRAM** 33% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text or stream-video`  
- <span style="color:Yellow;">Use:</span> **READ ANY NEWS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text and view-image and stream-video and stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
  
  
## tester debbie  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** a humble tower dweller who just wants to go online  
  
**Unlocks:**   
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
  
  
## tester ellie  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** a humble tower dweller who just wants to go online  
  
**Unlocks:**   
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
- <span style="color:Aqua;">Host:</span> **DecentroUserNode**  
  **<span style="color:DarkKhaki;">Produces:</span>** `facilitate-p2p-transaction`  
  **Scaling:** Static?=4-9  
  **Description:** decentro currency network facilitator  
  
  
## Loyal Worker  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A skilled all-rounder who takes on almost every professional work in the tower and somehow nails them all. They stick to the same producer for online service unless there is a better option.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [rtsp-diva-r](programs.md/#rtsp-diva-r)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ACCEPT FOOD DELIVERY** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **UPLOAD LECTURE VIDEO** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** professional  
- <span style="color:Yellow;">Use:</span> **POST ANY MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-audio`  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** music  
- <span style="color:Yellow;">Use:</span> **POST MEDICAL CONSULTATION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and post-video`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** medical  
- <span style="color:Yellow;">Use:</span> **POST ANY MOVIE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **POST ANY NEWS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
- <span style="color:Yellow;">Use:</span> **STREAM CCTV FOOTAGES** 100% @ [`udp/554`](traffic_types.md/#udp554) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **DO WORK WITH VPN** 100% @ [`udp/1194`](traffic_types.md/#udp1194) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
  
  
## Casual Dweller  
**Grace Days:** 10  
**Online Times:** 00:00 to 21:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(87% of the time)</span>  
  
**Description:** An individual who seamlessly integrates online activities into their daily routine, easily satisfied as long as they can stay connected.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server), [dnsmasq](programs.md/#dnsmasq)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **BUY INTERTOWER GOODS** 85% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** supplies, intertower  
- <span style="color:Yellow;">Use:</span> **SHARE VIRAL MEMES** 85% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and view-image and read-text`  
  **<span style="color:LightGray;">Subjects:</span>** viral, memes  
- <span style="color:Yellow;">Use:</span> **VIEW PAID CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and authenticate-transaction`  
  
  
## Casual Glancer  
**Grace Days:** 10  
**Online Times:** 06:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(50% of the time)</span>  
  
**Description:** An individual who briefly checks the latest online content with low network traffic, often browsing headlines from main sites.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **READ OFFICIAL NEWS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text and view-image and stream-video and stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** official, political, news-update  
- <span style="color:Yellow;">Use:</span> **DO WORK** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
  
  
## Religious Dweller  
**Grace Days:** 10  
**Online Times:** 05:00 to 23:01 <span style="color:gray;font-size:85%;white-space:nowrap;">(75% of the time)</span>  
  
**Description:** An individual who dedicates time to intentionally seeking spiritual knowledge for deeper religious understanding and personal spiritual growth.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VISIT RELIGIOUS FORUM** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-audio or stream-video or read-text or post-text or post-image or view-image`  
  **<span style="color:LightGray;">Subjects:</span>** religious  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILES** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Scientific Researcher  
**Grace Days:** 10  
**Online Times:** 05:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(79% of the time)</span>  
  
**Description:** An individual who dedicates time to methodically examining empirical evidence and scientific literature, employing critical thinking and analytical frameworks.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **POST SCIENTIFIC PAPER** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** scientific  
- <span style="color:Yellow;">Use:</span> **DO SCIENTIFIC RESEARCH** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** research, scientific  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Social Dweller  
**Grace Days:** 10  
**Online Times:** 01:55 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(92% of the time)</span>  
  
**Description:** An individual who mostly online to socialize, and easily fulfil as long as they can online.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **STREAM MEDIA CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** addictive  
- <span style="color:Yellow;">Use:</span> **VIEW OR POST SOCIAL MEDIA** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** social-media  
- <span style="color:Yellow;">Use:</span> **DO WORK** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 70% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **VISIT EXTERNAL TOWER** 75% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** public-transportation, intertower  
- <span style="color:Yellow;">Use:</span> **SHARE VIRAL MEMES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and view-image and read-text`  
  **<span style="color:LightGray;">Subjects:</span>** viral, memes  
- <span style="color:Yellow;">Use:</span> **VIEW PAID CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and authenticate-transaction`  
  
  
## Digital Minimalist  
**Grace Days:** 10  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An individual who only goes online for basic networking needs, and easily fulfills them as long as they can get online.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
  
  
## Digital Detoxer  
**Grace Days:** 10  
**Online Times:** 12:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** An individual who intentionally limits online/social media time; perhaps only checks messages at set times.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
  
  
## Cozy Foodie  
**Grace Days:** 10  
**Online Times:** 08:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(41% of the time)</span>  
  
**Description:** A dedicated homebody who finds joy in the kitchen, constantly experimenting with flavors and sharing favorite recipes with the world.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">3</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **POST FOOD RECIPE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** blogging, food  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
  
  
## Night Dweller  
**Grace Days:** 10  
**Online Times:** 16:05 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(32% of the time)</span>  
  
**Description:** A night owl who seamlessly integrates online activities into their daily routine, easily satisfied as long as they can stay connected.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **VISIT EXTERNAL TOWER** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** public-transportation, intertower  
- <span style="color:Yellow;">Use:</span> **SHARE VIRAL MEMES** 80% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and view-image and read-text`  
  **<span style="color:LightGray;">Subjects:</span>** viral, memes  
- <span style="color:Yellow;">Use:</span> **STREAM LOFI MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** lo-fi, music  
- <span style="color:Yellow;">Use:</span> **VIEW PAID CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and authenticate-transaction`  
  
  
## Private Dweller  
**Grace Days:** 10  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** An intensely private individual who carefully guards personal information and maintains strict boundaries around their digital footprint.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **STORE SURVEILLANCE DATA** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">10</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `store-text and tunnel-vpn-traffic`  
  **<span style="color:LightGray;">Subjects:</span>** exclusive, surveillance  
  
  
## Full-time Coder  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A software engineer who writes code exclusively for game studio 24/7.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **DO WORK THROUGH VPN** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">10</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and tunnel-vpn-traffic`  
  **<span style="color:LightGray;">Subjects:</span>** gaming  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 50% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
  
  
## Conservative Leader  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An individual who is a passionate conservative activist who continuously shares advertisements with fellow tower residents.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **POST IDEOLOGICAL ADVERTISEMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">20</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( post-text or post-video ) and verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** conservative, advertisement  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Liberal Announcer  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An individual who is a passionate liberal activist who continuously shares progressive advertisements, campaigns, and political content with fellow tower residents. They use high-bandwidth connections to distribute their ideology through frequent posting.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **POST ADVERTISEMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">25</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( post-text or post-video ) and verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** libertarian, advertisement  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Capitalistic Announcer  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An individual who is a passionate capitalistic activist who continuously shares advertisements with fellow tower residents.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **POST IDEOLOGICAL ADVERTISEMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">20</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( post-text or post-video ) and verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** capitalistic, advertisement  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Scifi Movie Director  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A movie director who produces movie content on video subscription platform  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **UPLOAD SCI-FI MOVIE** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** sci-fi  
- <span style="color:Yellow;">Use:</span> **PAY RESIDENTIAL UTILITIES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** residential-utilities, b2c  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Audio Lover  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A audio lover who stream content on audio-streaming subscription platform.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 50% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **STREAM ANY PODCAST** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** podcast  
- <span style="color:Yellow;">Use:</span> **STREAM ANY MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** music  
  
  
## Scientific Professor  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An individual who requires background tasks like large cloud backups, or data processing for their scientific research. They are very passionate to work in research lab.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **DO SCIENTIFIC RESEARCH** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">10</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** research, scientific  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Decentro Farmer  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A tech-savvy individual who dedicates their computing resources and time to decentro mining and is a low bandwidth user.   
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 25% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Home Chef  
**Grace Days:** 10  
**Online Times:** 02:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(91% of the time)</span>  
  
**Description:** A tower dweller who just loves to view food related website and is a low bandwidth user.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VIEW ONLINE RECIPE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** blogging, food  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Lifestyle Blogger  
**Grace Days:** 10  
**Online Times:** 02:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(91% of the time)</span>  
  
**Description:** A creative and low bandwidth user who regularly publishes detailed reviews about lifestyle products and shares their preferences.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **SHARE BLOG POSTS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** blogging  
  
  
## Digital Salesman  
**Grace Days:** 10  
**Online Times:** 00:00 to 21:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(87% of the time)</span>  
  
**Description:** A persistent digital salesperson who floods inboxes with unwanted emails.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 25% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **POST SPAM MAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and verify-user`  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 30% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
  
  
## Night Chatter  
**Grace Days:** 3  
**Online Times:** 21:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(12% of the time)</span>  
  
**Description:** A low bandwidth tower dweller who just loves to hang out virtually with friends while gaming or just chatting.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **CHAT WITH SOMEONE AT NIGHT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **PURCHASE ANY GAME** 80% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2c, gaming  
  
  
## Pet Lover  
**Grace Days:** 10  
**Online Times:** 00:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(75% of the time)</span>  
  
**Description:** A low bandwidth tower dweller who just loves to watch pet web content.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **ENJOY PET CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** pet  
  
  
## Secondhand Buyer  
**Grace Days:** 10  
**Online Times:** 00:00 to 21:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(87% of the time)</span>  
  
**Description:** A low bandwidth cost-conscious shopper who purchases secondhand and cheap items to stretch their budget.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 25% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **PURCHASE RECYCLED SUPPLIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2c, cheap, supplies  
  
  
## Vocal Connector  
**Grace Days:** 3  
**Online Times:** 00:00 to 21:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(87% of the time)</span>  
  
**Description:** A low bandwidth tower dweller who just loves to voice message to their peers.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Patient Professor  
**Grace Days:** 10  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An individual who requires background tasks like large cloud backups, or data processing for their scientific research. They require high frequency/volume, but tolerant of interruptions as long as it completes eventually.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **PROCESS SCIENTIFIC PAPERS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** scientific  
- <span style="color:Yellow;">Use:</span> **DO SCIENTIFIC RESEARCH** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** research, scientific  
- <span style="color:Yellow;">Use:</span> **ORDER PREMIUM FOOD** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food, premium  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE BACKUP FILES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Tower Worker  
**Grace Days:** 10  
**Online Times:** 00:00 to 22:48 <span style="color:gray;font-size:85%;white-space:nowrap;">(95% of the time)</span>  
  
**Description:** A skilled all-rounder who takes on almost every professional work in the tower and somehow nails them all.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [rtsp-diva-r](programs.md/#rtsp-diva-r)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ACCEPT FOOD DELIVERY** 1% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **UPLOAD LECTURE VIDEO** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** professional  
- <span style="color:Yellow;">Use:</span> **POST ANY MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-audio`  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** music  
- <span style="color:Yellow;">Use:</span> **POST MEDICAL CONSULTATION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and post-video`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** medical  
- <span style="color:Yellow;">Use:</span> **POST ANY MOVIE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **POST ANY NEWS** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
- <span style="color:Yellow;">Use:</span> **STREAM CCTV FOOTAGES** 80% @ [`udp/554`](traffic_types.md/#udp554) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **DO WORK** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
- <span style="color:Yellow;">Use:</span> **VIEW PAID CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and authenticate-transaction`  
  
  
## Freelance Worker  
**Grace Days:** 10  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** A freelance skilled all-rounder who takes on almost every job in the tower and somehow nails them all.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [rtsp-diva-r](programs.md/#rtsp-diva-r)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ACCEPT FOOD DELIVERY** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **UPLOAD LECTURE VIDEO** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** professional  
- <span style="color:Yellow;">Use:</span> **POST ANY MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-audio`  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** music  
- <span style="color:Yellow;">Use:</span> **POST MEDICAL CONSULTATION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and post-video`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** medical  
- <span style="color:Yellow;">Use:</span> **POST ANY MOVIE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **POST ANY NEWS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
- <span style="color:Yellow;">Use:</span> **STREAM CCTV FOOTAGES** 50% @ [`udp/554`](traffic_types.md/#udp554) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **DO FREELANCE WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** freelance  
- <span style="color:Yellow;">Use:</span> **ACCEPT NEIGHBOURS' TASK** 1% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** freelance  
- <span style="color:Yellow;">Use:</span> **MANAGE FIXED DEPOSIT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:LightGray;">Subjects:</span>** fixed-deposit, intertower  
  
  
## Neighbour Helper  
**Grace Days:** 10  
**Online Times:** 00:00 to 23:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(95% of the time)</span>  
  
**Description:** A tower dweller who helps their neighbors with different tasks when they have free time.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [rtsp-diva-r](programs.md/#rtsp-diva-r)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ACCEPT FOOD DELIVERY** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **UPLOAD LECTURE VIDEO** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** professional  
- <span style="color:Yellow;">Use:</span> **POST ANY MUSIC** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-audio`  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** music  
- <span style="color:Yellow;">Use:</span> **POST MEDICAL CONSULTATION** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and post-video`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** medical  
- <span style="color:Yellow;">Use:</span> **POST ANY MOVIE** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, read-text, view-image`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **POST ANY NEWS** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
- <span style="color:Yellow;">Use:</span> **STREAM CCTV FOOTAGES** 20% @ [`udp/554`](traffic_types.md/#udp554) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **ACCEPT NEIGHBOURS' TASK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** freelance  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
- <span style="color:Yellow;">Use:</span> **HIGH RISK GAMBLING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** gambling  
  
  
## Strategic Investor  
**Grace Days:** 10  
**Online Times:** 12:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(50% of the time)</span>  
  
**Description:** An investor who spreads investments across multiple asset classes and markets while maintaining a successful professional career.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [rtsp-diva-r](programs.md/#rtsp-diva-r)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **MANAGE FIXED DEPOSIT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:LightGray;">Subjects:</span>** fixed-deposit, intertower  
- <span style="color:Yellow;">Use:</span> **DO RISKY INVESTMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** gambling  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **SEND DECENTRO** @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-p2p-transaction` <span style="color:gray;font-size:85%;white-space:nowrap;">(Requires peer tracking provider)</span>  
  **<span style="color:DarkKhaki;">Produces:</span>** `access-p2p-currency`  
  
  
## Heavy Viewer  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A dedicated viewer who maintains near-constant streaming activity throughout the day, prioritizing connection stability to ensure uninterrupted enjoyment of movies and digital content.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO REMOTE SUPPORT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **STREAM ANY MOVIE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction and stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
  
  
## Stability Seeker  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An individual heavily reliant on constant, stable connection for work or critical services, but not necessarily using massive bandwidth constantly.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO REMOTE SUPPORT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
  
  
## Greedy Dweller  
**Grace Days:** 5  
**Online Times:** 00:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(75% of the time)</span>  
  
**Description:** A greedy individual who seamlessly integrates online activities into their daily routine.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **MANAGE FIXED DEPOSIT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:LightGray;">Subjects:</span>** fixed-deposit, intertower  
- <span style="color:Yellow;">Use:</span> **STREAM MEDIA CONTENT** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 80% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 20% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
- <span style="color:Yellow;">Use:</span> **REQUEST HELP FROM OTHERS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** freelance  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 65% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **STREAM LOFI MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** lo-fi, music  
- <span style="color:Yellow;">Use:</span> **JOIN HACKING WORKSHOP** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video and verify-user`  
  
  
## Greedy Gambler  
**Grace Days:** 5  
**Online Times:** 09:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(62% of the time)</span>  
  
**Description:** A greedy individual who hunts for the next big win and places bets on everything from sports to random events.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **STREAM MEDIA CONTENT** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 80% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 80% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **HIGH RISK GAMBLING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">3</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** gambling  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Digital Hoarder  
**Grace Days:** 5  
**Online Times:** 02:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(91% of the time)</span>  
  
**Description:** An individual who never deletes digital files. Takes tons of photos/videos, archives everything.   
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **STREAM MEDIA CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  **<span style="color:LightGray;">Subjects:</span>** software-as-a-service  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **PIRATING MOVIE CONTENT** 50% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Wealthy Dweller  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** Someone who only goes for the best and always chooses luxury services  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE PREMIUM PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking or authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2c, premium  
- <span style="color:Yellow;">Use:</span> **ORDER PREMIUM FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food, premium  
- <span style="color:Yellow;">Use:</span> **STREAM SCIENTIFIC MEDIA** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** scientific  
- <span style="color:Yellow;">Use:</span> **DO WORK** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILES** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **READ EXCLUSIVE ECONOMICAL NEWS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text and view-image and stream-video and stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** exclusive, economical  
- <span style="color:Yellow;">Use:</span> **MANAGE FIXED DEPOSIT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:LightGray;">Subjects:</span>** fixed-deposit, intertower  
- <span style="color:Yellow;">Use:</span> **REQUEST HELP FROM OTHERS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** freelance  
  
  
## Greedy Streamer  
**Grace Days:** 5  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** A greedy individual who rarely leaves the apartment, relies heavily on the internet for entertainment and essentials.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **STREAM MEDIA CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FAVOURITE MOVIES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
  
  
## Tech Adopter  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A greedy individual who always has the latest technology gadgets. Immediately tries new high-bandwidth services and applications.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** supplies, high-tech, b2c  
- <span style="color:Yellow;">Use:</span> **STREAM MEDIA CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 30% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **JOIN HACKING WORKSHOP** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video and verify-user`  
  
  
## Day Learner  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An individual who is obsessed with professional development and online certifications. Their require high bandwidth regularly as they stream lectures, download course materials, and participate in virtual workshops during day time.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **STREAM LECTURE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** professional, podcast  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE LECTURE CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
  
  
## Night Learner  
**Grace Days:** 5  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** An individual who attends online classes exclusively in evening hours after work, requiring high bandwidth to stream lectures, download course materials, and participate in virtual workshops during nighttime.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **STREAM LECTURE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video or stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** professional, podcast  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE LECTURE CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
  
  
## Software Engineer  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A 24/7 software engineer who requires high bandwidth for both continuous coding work and heavy personal internet usage.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO REMOTE SUPPORT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **STREAM ANY MOVIE** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction and stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 80% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
- <span style="color:Aqua;">Host:</span> **DecentroUserNode**  
  **<span style="color:DarkKhaki;">Produces:</span>** `facilitate-p2p-transaction`  
  **Scaling:** Static?=4-9  
  **Description:** decentro currency network facilitator  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK WITH VPN** 30% @ [`udp/1194`](traffic_types.md/#udp1194) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **JOIN HACKING WORKSHOP** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video and verify-user`  
  
  
## Malicious User  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A tower dweller who scraps text content and spreads worms to the network.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:red;">Worm:</span> **ANNOYING_MORRIS** @ `tcp/51#`  
  **Vulnerable Devices:** NETWORK_ROUTER, COMPUTE_SERVER  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 100% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
  
  
## Minimum Spender  
**Grace Days:** 5  
**Online Times:** 06:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(50% of the time)</span>  
  
**Description:** A cost-conscious consumer who actively seeks out free services, discounts, and budget options while being reluctant to spend on premium features.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **DO REMOTE SUPPORT** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER CHEAP FOOD** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food, cheap  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **PIRATING MOVIE CONTENT** 80% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **PURCHASE CHEAP SUPPLIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2c, cheap, supplies  
- <span style="color:Yellow;">Use:</span> **VIEW FREE-TIER CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">3</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** free-tier  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Pavillion Tower  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Internet exchange points are neighbouring buildings that exchange services with the current tower.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO BUSINESS PARTNER** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Aqua;">Host:</span> **HostEcommerceSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** Step outside the tower. Your only portal to global travel, international goods, and the world beyond!  
  
  
## Gateway Tower  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Internet exchange points are neighbouring buildings that exchange services with the current tower.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **ATTEND VIDEO MEETING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-live-video and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Aqua;">Host:</span> **HostDividendPayment**  
  **<span style="color:DarkKhaki;">Produces:</span>** `facilitate-banking`  
  **Scaling:** Survey  
  **Description:** Safe, predictable growth for your money.  
  
  
## WhiteHat Tower  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Internet exchange points are neighbouring buildings that exchange services with the current tower.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Aqua;">Host:</span> **HostLiveHackingWorkshop**  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-live-video, verify-user`  
  **Scaling:** Survey  
  **Description:** host private ethical hacking workshop  
  
  
## Kanban Central  
**Grace Days:** 3  
**Online Times:** 02:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(91% of the time)</span>  
  
**Description:** A kanban platform that empowers users to create customizable boards for planning, tracking, and managing projects of any type.   
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, post-text, post-image`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostBusinessKanban**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, post-text, post-image`  
  **Scaling:** Survey  
  **Description:** experience enhanced project efficiency with our premium business kanban service - invite your team and organization to streamline project management.  
  
  
## Booking Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A flexible travel provider that offers standalone or combined bookings for flights and accommodations.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostCheapTravelPackage**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** offer unbeatable travel packages to the public with the most affordable rates and exclusive deals - book now before these limited-time offers expire!  
  
  
## Full Campus  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Digital classroom requiring consistent full day bandwidth for synchronized learning experiences across multiple time zones.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, post-video`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostOnlineUniversity**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-video, post-text, post-image, stream-video, read-text, view-image, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** join our comprehensive online university platform offering accredited degree programs designed for working professionals and students.  
  
  
## Night Campus  
**Grace Days:** 3  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** Digital classroom requiring consistent night time bandwidth for synchronized learning experiences across multiple time zones.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, post-video`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostOnlineUniversity**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-video, post-text, post-image, stream-video, read-text, view-image, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** join our comprehensive online university platform offering accredited degree program designed for working professionals and students.  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
  
  
## Recycling Center  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A budget-friendly e-commerce seller specializing in refurbished electronics and upcycled goods, providing basic transaction services through their online storefront.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostEcommerceSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** offers unbeatable prices on used devices for tower residents with exclusive bulk discounts.  
  
  
## Game Studios  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An indie gaming studios that hosts their development workspace on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PUBLISH GAME STOREPAGE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** gaming, sci-fi  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **EXCHANGE BUSINESS EMAIL** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Aqua;">Host:</span> **HostDevWorkspace**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction, tunnel-vpn-traffic, stream-video, view-image, verify-user`  
  **Scaling:** Survey  
  **Description:** An internal development workspace for hired coders, plus a secure login site where gamers can view game releases.  
  
  
## Tech Center  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An online shopping platform which provides high-quality servers, switches, and networking equipment for home tech setups.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO CUSTOMERS** 30% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **PUBLISH STORE PAGE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** high-tech, supplies  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostEcommerceSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** let's buy high-quality servers, switches, and networking equipment for home tech setups.  
  
  
## All Supplies Center  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Tech and office supply store offering computers, networking equipment, printers, and administrative essentials - your one-stop shop for all business and home office technology needs.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **CUSTOMER SERVICE** 30% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **PUBLISH STORE PAGE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** high-tech, administrative, supplies  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostEcommerceSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** we are your one-stop shop for all business and home office technology needs.  
  
  
## Horror Studios  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An indie gaming studios which specialises in horror games and hosts their development workspace on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostDevWorkspace**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction, tunnel-vpn-traffic, stream-video, view-image, verify-user`  
  **Scaling:** Survey  
  **Description:** An internal development workspace for hired coders, plus a secure login site where gamers can view latest game releases.  
- <span style="color:Yellow;">Use:</span> **PUBLISH GAME STOREPAGE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** horror, gaming  
- <span style="color:Yellow;">Use:</span> **CUSTOMER SERVICE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Travel Agency  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A travel agency that create one-stop vacation packages by leveraging relationships with airlines, hotels, and local tour operators.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostTravelPackage**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** book your dream vacation with our curated high-end travel deals.  
  
  
## Cheap Kitchen  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A cheap restaurant that operates through delivery apps, optimizing its menu and operations for efficient online food delivery.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 30% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **POST FOOD MENU** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `view-image, read-text, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** food, cheap  
- <span style="color:Aqua;">Host:</span> **ReadingFoodMenu**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text`  
  **Scaling:** Survey  
  **Description:** food review community where people can share and read restaurant reviews.  
  
  
## Helper Central  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A community job board where residents can post small tasks and hire neighbors for help - earn extra income while supporting your tower community.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostCommunityHelping**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, authenticate-transaction, accept-instruction`  
  **Scaling:** Visitors  
  **Description:** Post small tasks and hire neighbors for help, or earn extra income by accepting tasks to support your tower community.  
  
  
## Go Delivery Hub  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A pioneering technology company offering an all-in-one super-app that seamlessly integrates ride-hailing, food delivery, and digital payment services online.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostFoodDelivery**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-image, post-text, accept-instruction, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** food delivery platform  
  
  
## Cyber Mall  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An e-commerce platform where multiple merchants sell various products, offering customers a wide selection of items from different sellers in one convenient location.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO CUSTOMERS** 80% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostOnlineMerchant**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** we are online marketplace platform hosting multiple e-commerce sellers.  
  
  
## Database Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A subscription database-as-a-service platform which provide managed database service to small data company.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Aqua;">Host:</span> **HostDatabaseSubscription**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** access a managed database without the need to set up physical hardware or manage database software.  
  
  
## Game Marketplace  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A digital distribution service platform which releases games.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-video, post-text`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostGamePurchaseAndPosting**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-video, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** free to post your own games and play others' creations.  
  
  
## Film Sphere  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A subscription video streaming service platform which release movie and entertainment show.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 80% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-video, post-text, post-image`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostMoviePlatform**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-video, post-text, post-image, authenticate-transaction, stream-video, read-text, view-image`  
  **Scaling:** Survey  
  **Description:** we are movie platform where users can upload and watch films - share your videos or discover new content from our community of creators.  
  
  
## Premium Kitchen  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A premium restaurant that operates through delivery apps, optimizing its menu and operations for efficient online food delivery.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 30% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **POST FOOD MENU** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `view-image, read-text, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** food, premium  
- <span style="color:Aqua;">Host:</span> **ReadingFoodMenu**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text`  
  **Scaling:** Survey  
  **Description:** food review community where people can share and read restaurant reviews.  
  
  
## Telemedicine Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A convenient healthcare platform connecting patients with licensed physicians for virtual consultations, medical advice, and prescriptions from any location.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, post-video`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostMedicalConsultation**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-image, post-text, post-video, authenticate-transaction, stream-video, read-text, view-image`  
  **Scaling:** Survey  
  **Description:** online medical consultation platform connecting patients with licensed healthcare professionals for virtual appointments.  
  
  
## Blogger Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A platform where individuals showcase their diverse perspectives through personalized blogs and interactive community engagement. They expect more visitors than usual.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Aqua;">Host:</span> **HostBlogSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, read-text, view-image`  
  **Scaling:** Visitors  
  **Description:** join our community and start posting your blog today.  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 30% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Book Club  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An interactive community platform by tower residents that brings book enthusiasts together for meaningful connections around shared literary passions.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostLibrarySite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, read-text, view-image`  
  **Scaling:** Visitors  
  **Description:**  join our community and start sharing your favourite books today.  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## Cloud Hub  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A software-as-a-service (SaaS) provider company that hosts their cloud storage service. They expect more visitors than usual.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `store-text, store-image, store-video`  
- <span style="color:Aqua;">Host:</span> **HostFileStorage**  
  **<span style="color:DarkKhaki;">Produces:</span>** `store-text, store-image, store-video`  
  **Scaling:** Visitors  
  **Description:** we provide cloud storage service offering reliable online backup and file sharing.  
  
  
## Data Nexus  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An international data company that hosts their workspace on-premise and hire more freelancer.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **USE BUSINESS KANBAN** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction and post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** b2b, project-planning  
- <span style="color:Aqua;">Host:</span> **HostFreelanceWorkspace**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **Scaling:** Survey  
  **Description:** internal workspace which provides freelance coders with advanced tools and collaborative environments to create the best working experience within tower.  
- <span style="color:Yellow;">Use:</span> **USE DATABASE SERVICE** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** database-as-a-service, b2b  
- <span style="color:Yellow;">Use:</span> **EXCHANGE BUSINESS EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Data Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An international data company that hosts their workspace on-premise, and hire permanent staff.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction, tunnel-vpn-traffic, stream-video, view-image, verify-user`  
- <span style="color:Aqua;">Host:</span> **HostDevWorkspace**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction, tunnel-vpn-traffic, stream-video, view-image, verify-user`  
  **Scaling:** Survey  
  **Description:** An internal workspace for hired coders to develop custom software solutions, plus a login-protected site where authorized users can view company data products and case studies.  
- <span style="color:Yellow;">Use:</span> **USE BUSINESS KANBAN** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction and post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** b2b, project-planning  
  
  
## Econ News  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An economics news company that hosts their site on-premise (focus mainly on economics news)  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostNewsSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, stream-video, stream-audio`  
  **Scaling:** Survey  
  **Description:** exclusive news site for public.  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Indie Studios  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An indie gaming studios that hosts their development workspace on-premise, and hire mostly freelancers.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PUBLISH SCI-FI GAME** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** gaming, sci-fi  
- <span style="color:Aqua;">Host:</span> **HostFreelanceWorkspace**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **Scaling:** Survey  
  **Description:** host freelance workspace  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## Free Kanban Central  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A kanban platform that empowers users to create customizable boards for planning, tracking, and managing projects of any type.   
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostFreeKanban**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image`  
  **Scaling:** Survey  
  **Description:** free kanban platform  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## Horror Director  
**Grace Days:** 10  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** A comedy movie director who produces movie content on video subscription platform  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **UPLOAD MOVIES TO SITE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-video and post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** b2c, horror, movie  
  
  
## Media Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A media company that hosts their site on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostMediaContent**  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-video, view-image, read-text`  
  **Scaling:** Survey  
  **Description:** let’s explore our additive streaming site to brighten your day.  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Music Sphere  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An music streaming company that provide music streaming from musician.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostMusicSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-audio, stream-audio`  
  **Scaling:** Visitors  
  **Description:** free music site  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Audio Sphere  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An podcast streaming company that provide podcast streaming from podcasters.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostPostcastPlatform**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-audio, stream-audio, read-text, post-text`  
  **Scaling:** Visitors  
  **Description:** host podcast platform  
- <span style="color:Yellow;">Use:</span> **POST PODCAST TRANSCRIPT** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** blogging  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## Political News  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An official political news company that hosts their site on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostOfficialPoliticalNews**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, stream-video, stream-audio`  
  **Scaling:** Survey  
  **Description:** official news site  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Religious Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A platform where individuals deepen their spiritual journey through sacred text studies, religious discourse, and faith-based resources.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostForumSocialMedia**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-text, post-image, post-video, stream-video`  
  **Scaling:** Visitors  
  **Description:** let's share your spiritual journey with us.  
- <span style="color:Yellow;">Use:</span> **TALK TO BELIEVERS** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **POST NEWS ON PORTAL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
  
  
## Scientific News  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A scientific news company that hosts their site on-premise.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostScientificNews**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, stream-video, stream-audio`  
  **Scaling:** Survey  
  **Description:** scientific news site  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **SEND NEWSLETTER** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and verify-user`  
  
  
## Tower Portal  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** All-in-one community portal connecting residents, staff, and service providers through a unified platform.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text`  
- <span style="color:Aqua;">Host:</span> **HostNewsPosting**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text`  
  **Scaling:** Visitors  
  **Description:** feel free to read or post announcement.  
- <span style="color:Yellow;">Use:</span> **PURCHASE OFFICE SUPPLIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** supplies, administrative, b2c  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENT** 55% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `print-image or print-text`  
  
  
## Socialite Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A social media company that hosts media content from influencer and other content creator.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostSocialMedia**  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-video, view-image, read-text, post-text, post-image, post-video`  
  **Scaling:** Survey  
  **Description:** social media platform  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **PROMOTE ON PORTAL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text`  
  **<span style="color:LightGray;">Subjects:</span>** news-update  
  
  
## Finance Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A bank which enable transaction within tower. Require always on and consistent network services.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `facilitate-banking`  
  **<span style="color:LightGray;">Subjects:</span>** critical  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Aqua;">Host:</span> **ProvideBankingService**  
  **<span style="color:DarkKhaki;">Produces:</span>** `facilitate-banking`  
  **Scaling:** Survey  
  **Description:** enjoy our best professional banking services for both businesses and individual customers.  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENT** 80% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `print-image or print-text`  
  
  
## Chatter Hive  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A instant-messaging company that allows user to chat with each other at real time.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-instant-messages, post-instant-messages`  
- <span style="color:Aqua;">Host:</span> **HostChattingPlatform**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-instant-messages, post-instant-messages`  
  **Scaling:** Visitors  
  **Description:** let's chat with your loved ones instantly.  
  
  
## Mail Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A basic email service provider who has consistent low bandwidth usage, and enable residents to read and send email.   
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text, verify-user`  
- <span style="color:Aqua;">Host:</span> **ReadEmail**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, post-text, verify-user`  
  **Scaling:** Visitors  
  **Description:** let's read incoming messages and compose responses when necessary.  
  
  
## Software Nexus  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A software company that provides software updates for their client.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostSoftwareUpdate**  
  **<span style="color:DarkKhaki;">Produces:</span>** `update-software`  
  **Scaling:** Visitors  
  **Description:** release software update for companies.  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENT** 70% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `print-image or print-text`  
  
  
## Utilities Sphere  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An integrated utility management ecosystem streamlining resource monitoring, usage optimization, and payment processing for all building services and infrastructure. This company often expects more visitors.  
  
**Unlocks:** [dns-lite](programs.md/#dns-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Aqua;">Host:</span> **IssueUtilitiesBills**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Visitors  
  **Description:** kindly pay your monthly utilities bills by the due date to avoid service interruptions.  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENT** 80% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `print-image or print-text`  
  
  
## Ads Agency  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** This advertisement company specializes in promoting ideological campaigns for political associations, offering cost-effective broadcasting services.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 30% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Aqua;">Host:</span> **HostIdeologicalAds**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-video, verify-user`  
  **Scaling:** Visitors  
  **Description:** host ideological advertisement  
  
  
## Research Hub  
**Grace Days:** 10  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A place which provides comprehensive resources, collaboration tools, and expert support for academics, scientists, and researchers to conduct studies and share findings.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostExclusiveResearch**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **Scaling:** Visitors  
  **Description:** host scientific research work  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Surveillance Hub  
**Grace Days:** 10  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** An one-stop cctv service provider who enables their subscribers to view cctv footages at real-time.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **ProvideHiddenContent**  
  **<span style="color:DarkKhaki;">Produces:</span>** `store-text, tunnel-vpn-traffic`  
  **Scaling:** Static?=1-1  
  **Description:** allow users to store surveillance data with the utmost privacy settings.  
  
  
## Billing Officer  
**Grace Days:** 4  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An associate who manages customer billing operations.   
  
They reconcil meter usage against issued bills, identifying discrepancies, and flagging anomalies for investigation.  
  
**Unlocks:** [ten-bill-server](programs.md/#ten-bill-server), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **EMPLOYEE SELF-SERVICE** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and ( post-leave-request or post-certification-renewal )`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **CUSTOMER BILLING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and post-invoice`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-invoice, verify-user`  
- <span style="color:Yellow;">Use:</span> **SUBMIT HELPDESK TICKET** 80% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( post-image or post-text or verify-user )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** professional, support, corporate  
  
  
## Customer Officer  
**Grace Days:** 4  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Serves as the frontline point of contact between Tenabolt and its customers.   
  
Responsible for receiving, reviewing, and resolving customer complaints.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [complaint-server2](programs.md/#complaint-server2), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer), [print-server](programs.md/#print-server), [complaint-lite](programs.md/#complaint-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **RESOLVE COMPLAINTS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-complaint and store-complaint`  
  
  
## Analytics Officer  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A data analyst who identified amount of illegal non-revenue electric supply from the company  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-calc-server](programs.md/#tena-calc-server), [tena-staff-portal](programs.md/#tena-staff-portal), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **PUBLISH DASHBOARD** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-tenabolt-dashboard`  
  **<span style="color:DarkKhaki;">Produces:</span>** `view-tenabolt-dashboard`  
  **<span style="color:LightGray;">Subjects:</span>** software-as-a-service, professional  
- <span style="color:Yellow;">Use:</span> **IDENTIFY THEFT ANOMALY** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-meter-data or read-operation-data or read-tenabolt-calculation )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-inspection-report`  
  
  
## Distribution Officer  
**Grace Days:** 6  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A staff who monitors the distribution network for faults, demand anomalies, and operational issues.  
  
**Unlocks:** [maintenance-server](programs.md/#maintenance-server), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **POST REPAIR TASK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( post-repair-workorder or post-inspection-report or read-operation-data or view-tenabolt-dashboard )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-repair-instruction`  
  
  
## Field Inspector  
**Grace Days:** 7  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A field technician who performs on-site inspection, maintenance, and repair of grid infrastructure including power plant assets, distribution lines, and customer meters.  
  
**Unlocks:** [ten-scada-server](programs.md/#ten-scada-server), [maintenance-server](programs.md/#maintenance-server), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE FIELD REPORT** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT ASSET MAP** 100% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **ACCEPT REPAIR TASK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-repair-instruction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-workorder-claim`  
- <span style="color:Yellow;">Use:</span> **POST THEFT INSPECTION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-inspection-report`  
  
  
## Finance Officer  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A finance who manages the company's financial operations including approving expenditures, processing vendor payments, and closing work claims.  
  
**Unlocks:** [print-server](programs.md/#print-server), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **MANAGE FINANCE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-workorder-claim or read-expansion-budget )`  
  
  
## Grid Officer  
**Grace Days:** 8  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A grid control operator who monitors and controls power plant switching to balance supply against live customer demand.  
  
**Unlocks:** [ten-scada-server](programs.md/#ten-scada-server), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE OPERATION PLANS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT OPERATION SCHEDULE** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **CONTROL GRID POWER** 100% @ [`tcp/2404`](traffic_types.md/#tcp2404) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and adjust-tenabolt-setpoint`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-operation-data`  
  
  
## HR Officer  
**Grace Days:** 3  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** Responsible for maintaining employee records, processing leave approvals, tracking certifications, and running payroll cycles.  
  
**Unlocks:** [print-server](programs.md/#print-server), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [tena-employee-db](programs.md/#tena-employee-db), [tena-staff-portal](programs.md/#tena-staff-portal), [dns-server](programs.md/#dns-server), [dns-lite](programs.md/#dns-lite), [padu_v1](programs.md/#padu_v1), [dnsmasq](programs.md/#dnsmasq), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 100% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **MANAGE WORKFORCE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and post-employee-payslip`  
  **<span style="color:DarkKhaki;">Produces:</span>** `verify-user, read-employee-payslip`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE AS A SERVICE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image )`  
  **<span style="color:LightGray;">Subjects:</span>** software-as-a-service, professional  
- <span style="color:Yellow;">Use:</span> **SUBMIT HELPDESK TICKET** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( post-image or post-text or verify-user )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** professional, support, corporate  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 10% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Legal Officer  
**Grace Days:** 3  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A lawyer who defends TenaBolt against legal suits and regulatory penalties.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [mailer](programs.md/#mailer), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **DRAFT CONTRACT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `upload-file or download-file`  
  
  
## Meter Reader I  
**Grace Days:** 3  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** a meter reader who uploads electrical meter reading.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-meter-db](programs.md/#tena-meter-db), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **POST METER READINGS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-meter-reading`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-meter-reading`  
  
  
## Morning Grid Officer  
**Grace Days:** 8  
**Online Times:** 00:00 to 09:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A grid control operator who monitors and controls power plant switching to balance supply against live customer demand.  
  
**Unlocks:** [ten-scada-server](programs.md/#ten-scada-server), [print-server](programs.md/#print-server), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE OPERATION PLANS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT OPERATION SCHEDULE** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **CONTROL GRID POWER** 100% @ [`tcp/2404`](traffic_types.md/#tcp2404) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and adjust-tenabolt-setpoint`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-operation-data`  
  
  
## Morning Technician  
**Grace Days:** 8  
**Online Times:** 00:00 to 09:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** a humble technician who resolve complaints in the morning.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [hypervisor-server](programs.md/#hypervisor-server), [log-server](programs.md/#log-server), [tena-staff-portal](programs.md/#tena-staff-portal), [print-server](programs.md/#print-server), [log-lite](programs.md/#log-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **QUERY EVENT LOGS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `query-log-entry`  
- <span style="color:Yellow;">Use:</span> **RESOLVE HELPDESK TICKET** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** professional, support, corporate  
- <span style="color:Yellow;">Use:</span> **PROVISION VIRTUAL MACHINE** 80% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">15</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `provision-vm`  
  
  
## Night Grid Officer  
**Grace Days:** 8  
**Online Times:** 12:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(50% of the time)</span>  
  
**Description:** A grid control operator who monitors and controls power plant switching to balance supply against live customer demand.  
  
**Unlocks:** [ten-scada-server](programs.md/#ten-scada-server), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE OPERATION PLANS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT OPERATION SCHEDULE** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **CONTROL GRID POWER** 100% @ [`tcp/2404`](traffic_types.md/#tcp2404) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and adjust-tenabolt-setpoint`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-operation-data`  
  
  
## Night Associate  
**Grace Days:** 5  
**Online Times:** 12:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(50% of the time)</span>  
  
**Description:** a humble staff who just wants to visit company application  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Night Technician  
**Grace Days:** 7  
**Online Times:** 18:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(25% of the time)</span>  
  
**Description:** a humble technician who resolve complaints  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [hypervisor-server](programs.md/#hypervisor-server), [print-server](programs.md/#print-server), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [log-server](programs.md/#log-server), [tena-staff-portal](programs.md/#tena-staff-portal), [print-server](programs.md/#print-server), [log-lite](programs.md/#log-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **RESOLVE COMPLAINTS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-complaint and store-complaint`  
- <span style="color:Yellow;">Use:</span> **QUERY EVENT LOGS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `query-log-entry`  
- <span style="color:Yellow;">Use:</span> **RESOLVE HELPDESK TICKET** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** professional, support, corporate  
- <span style="color:Yellow;">Use:</span> **PROVISION VIRTUAL MACHINE** 20% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">15</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `provision-vm`  
  
  
## Normal Associate  
**Grace Days:** 6  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** a humble tenabolt staff who just wants to do work  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-staff-portal](programs.md/#tena-staff-portal), [voip-server](programs.md/#voip-server), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 100% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **EMPLOYEE SELF-SERVICE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and ( post-leave-request or post-certification-renewal )`  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Normal Technician  
**Grace Days:** 7  
**Online Times:** 09:00 to 21:36 <span style="color:gray;font-size:85%;white-space:nowrap;">(52% of the time)</span>  
  
**Description:** a humble technician who resolve complaints  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [log-server](programs.md/#log-server), [tena-staff-portal](programs.md/#tena-staff-portal), [hypervisor-server](programs.md/#hypervisor-server), [tena-staff-portal](programs.md/#tena-staff-portal), [print-server](programs.md/#print-server), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [log-lite](programs.md/#log-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **QUERY EVENT LOGS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `query-log-entry`  
- <span style="color:Yellow;">Use:</span> **RESOLVE HELPDESK TICKET** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** professional, support, corporate  
- <span style="color:Yellow;">Use:</span> **PROVISION VIRTUAL MACHINE** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">15</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `provision-vm`  
  
  
## Partner Gateway  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Represents outbound internet traffic from Tenabolt to its third-party service providers.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [dns-lite](programs.md/#dns-lite), [padu_v1](programs.md/#padu_v1), [padu_v2](programs.md/#padu_v2), [dnsmasq](programs.md/#dnsmasq), [tena-employee-db](programs.md/#tena-employee-db)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ACCESS EMPLOYEE DATABASE** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-employee-data or post-employee-data )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `verify-user, post-leave-request, post-certification-renewal, post-employee-payslip`  
- <span style="color:Aqua;">Host:</span> **HcmService**  
  **<span style="color:DarkKhaki;">Produces:</span>** `verify-user, post-leave-request, post-certification-renewal, post-employee-payslip, read-employee-payslip`  
  **Scaling:** Survey  
  **Description:** allows human resource to manage staff records, and staff to manage their own leave, payslips, and other staff-related applications.  
- <span style="color:Aqua;">Host:</span> **ServeSaas**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, view-tenabolt-dashboard, post-tenabolt-dashboard`  
  **Scaling:** Survey  
  **Description:** Enables staff to access dashboards, retrieve external data, and publish outputs to cloud services.  
  
  
## Planning Officer  
**Grace Days:** 7  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A capital planning manager who oversees site identification, budget proposals, and infrastructure expansion projects.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-gis-server](programs.md/#tena-gis-server), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE PLAN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT RESEARCH** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **PLAN GRID EXPANSION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and ( store-geospatial-data or read-geospatial-data )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-expansion-budget`  
  
  
## Cloud Service  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A third-party cloud service provider. Hosts external SaaS platforms and data services.  
  
Switched off by IT staff during non-working hour to save cost.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [dns-lite](programs.md/#dns-lite), [padu_v1](programs.md/#padu_v1)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **ServeSaas**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, view-tenabolt-dashboard, post-tenabolt-dashboard`  
  **Scaling:** Survey  
  **Description:** Enables staff to access dashboards, retrieve external data, and publish outputs to cloud services.  
  
  
## Tenabolt Retail  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A third-party retail platform that facilitates the sale and distribution of Tenabolt devices to the public.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [dns-lite](programs.md/#dns-lite), [padu_v1](programs.md/#padu_v1)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **EcommerceService**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, read-text, view-image, post-text, post-image`  
  **Scaling:** Survey  
  **Description:** allows e-commerce department to manage sales.  
  
  
## People Operations  
**Grace Days:** 3  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A third party service provider who handles employee records, onboarding, and workforce administration.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [dns-lite](programs.md/#dns-lite), [dnsmasq](programs.md/#dnsmasq)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ACCESS EMPLOYEE DATABASE** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-employee-data or post-employee-data )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `verify-user, post-leave-request, post-certification-renewal, post-employee-payslip`  
- <span style="color:Aqua;">Host:</span> **HcmService**  
  **<span style="color:DarkKhaki;">Produces:</span>** `verify-user, post-leave-request, post-certification-renewal, post-employee-payslip, read-employee-payslip`  
  **Scaling:** Survey  
  **Description:** allows human resource to manage staff records, and staff to manage their own leave, payslips, and other staff-related applications.  
  
  
## IT Service  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** IT Service Management software hosted by another IT technician in Tenabolt.  
  
Only operates during working hours.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [log-server](programs.md/#log-server), [dns-lite](programs.md/#dns-lite), [padu_v1](programs.md/#padu_v1), [padu_v2](programs.md/#padu_v2), [log-lite](programs.md/#log-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **QUERY EVENT LOGS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `query-log-entry`  
- <span style="color:Yellow;">Use:</span> **ACCESS DATABASE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `store-text and store-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-text, post-image, verify-user, accept-instruction`  
- <span style="color:Aqua;">Host:</span> **ITSMService**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-text, post-image, verify-user, accept-instruction`  
  **Scaling:** Survey  
  **Description:** allows staff to submit it tickets  
  
  
## Public Gateway  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Represents incoming internet traffic to Tenabolt's public-facing services.  
  
**Unlocks:** [complaint-server2](programs.md/#complaint-server2), [ten-public-portal](programs.md/#ten-public-portal), [complaint-server2](programs.md/#complaint-server2), [dns-server](programs.md/#dns-server), [dns-lite](programs.md/#dns-lite), [padu_v1](programs.md/#padu_v1), [padu_v2](programs.md/#padu_v2), [dnsmasq](programs.md/#dnsmasq), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server), [tena-staff-portal](programs.md/#tena-staff-portal), [complaint-lite](programs.md/#complaint-lite), [tmp-collabpoint0](programs.md/#tmp-collabpoint0), [ten-public-lite](programs.md/#ten-public-lite)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SUBMIT COMPLAINTS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-complaint`  
- <span style="color:Yellow;">Use:</span> **PURCHASE DEVICES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction and view-image and read-text`  
  **<span style="color:LightGray;">Subjects:</span>** official, b2c, high-tech  
- <span style="color:Yellow;">Use:</span> **READ OUTAGE NEWS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and not verify-user`  
- <span style="color:Yellow;">Use:</span> **READ BILL INVOICE** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and read-invoice`  
- <span style="color:Yellow;">Use:</span> **TEXT SCRAPING** 30% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text`  
  
  
## PR Officer  
**Grace Days:** 3  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** Manages Tenabolt's public image and communications. Responsible for publishing company news, outage updates, and official announcements to keep the public informed.  
  
**Unlocks:** [print-server](programs.md/#print-server), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [ten-public-portal](programs.md/#ten-public-portal), [tena-staff-portal](programs.md/#tena-staff-portal), [mailer](programs.md/#mailer)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE SOCIAL MEDIA** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT POSTERS** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **POST OUTAGE NEWS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-news-updates`  
  
  
## R&D Engineer  
**Grace Days:** 10  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An R&D engineer who works towards more sustainable and effective energy sources, specialising in nuclear reactor modelling and calculation.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-calc-server](programs.md/#tena-calc-server), [print-server](programs.md/#print-server), [mailer](programs.md/#mailer), [tena-staff-portal](programs.md/#tena-staff-portal), [tmp-collabpoint1](programs.md/#tmp-collabpoint1)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE TENABOLT RESEARCH** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT TENABOLT RESEARCH** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **SAAS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image )`  
  **<span style="color:LightGray;">Subjects:</span>** software-as-a-service, professional  
- <span style="color:Yellow;">Use:</span> **DO TENABOLT CALCULATION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">8</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and ( run-tenabolt-simulation or store-tenabolt-model )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-tenabolt-calculation`  
  
  
## R&D Specialist  
**Grace Days:** 10  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An R&D specialist who works towards more sustainable and effective energy sources, specialising in nuclear reactor modelling and calculation.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-calc-server](programs.md/#tena-calc-server), [print-server](programs.md/#print-server), [mailer](programs.md/#mailer), [tena-staff-portal](programs.md/#tena-staff-portal), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [tena-calc-server2](programs.md/#tena-calc-server2), [ten-anomaly-server](programs.md/#ten-anomaly-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE TENABOLT RESEARCH** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT TENABOLT RESEARCH** 50% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **SAAS** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image )`  
  **<span style="color:LightGray;">Subjects:</span>** software-as-a-service, professional  
- <span style="color:Yellow;">Use:</span> **DO TENABOLT CALCULATION** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">8</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and ( run-tenabolt-simulation or store-tenabolt-model )`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-tenabolt-calculation`  
  
  
## Sales Officer  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** Manages Tenabolt's product listings and sales channels on third-party retail platforms.  
  
**Unlocks:** [dns-server](programs.md/#dns-server), [tena-staff-portal](programs.md/#tena-staff-portal), [voip-server](programs.md/#voip-server), [mailer](programs.md/#mailer), [tmp-collabpoint1](programs.md/#tmp-collabpoint1), [print-server](programs.md/#print-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **READ STAFF BULLETIN** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-news-updates and verify-user`  
- <span style="color:Yellow;">Use:</span> **EXHANGE EMAILS** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or post-text or post-image ) and verify-user and not ( read-complaint and post-complaint ) and not publish-tenabolt-dashboard and not authenticate-transaction and not accept-instruction`  
- <span style="color:Yellow;">Use:</span> **SHARE MEDIA FILE** 30% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `download-file and upload-file`  
- <span style="color:Yellow;">Use:</span> **PRINT DOCUMENTS** 100% @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">6</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( print-image or print-text )`  
- <span style="color:Yellow;">Use:</span> **EMPLOYEE SELF-SERVICE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `verify-user and ( post-leave-request or post-certification-renewal )`  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **MANAGE PRODUCTS** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** official, b2c, high-tech  
  
  
## AI Researcher  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A researcher who designs, develops, and studies artificial intelligence systems to advance the field through research, experimentation  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Yellow;">Use:</span> **DO CONFIDENTIAL RESEARCH** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** research  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Chips Designer  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A highly specialized engineer who designs the architectural blueprints and detailed circuit layouts for microprocessors, memory chips, and other semiconductor devices  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **DO CHIPS DESIGNING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** high-tech, research  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Professional Gamer  
**Grace Days:** 5  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A professional e-sports streamer broadcasting live gameplay on gaming platforms, entertaining viewers with competitive gaming content.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **DO GAMEPLAY STREAMING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">10</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** gaming  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
  
  
## Binge Watcher  
**Grace Days:** 10  
**Online Times:** 02:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(91% of the time)</span>  
  
**Description:** An individual who watches multiple movies lasting several hours without breaks in a single sitting.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **STREAM ANY MOVIE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction and stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
- <span style="color:Yellow;">Use:</span> **PIRATING MOVIE CONTENT** 70% @ [`tcp/80##`](traffic_types.md/#tcp80-1) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Malicious  
  **Satiety on Consume:** for producer <span style="color:Salmon;">-1</span>, for user <span style="color:Salmon;">0</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-video`  
  **<span style="color:LightGray;">Subjects:</span>** movie  
  
  
## Jazz Lover  
**Grace Days:** 10  
**Online Times:** 02:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(91% of the time)</span>  
  
**Description:** A tower dweller who loves jazz music and enjoys listening to various jazz artists.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **STREAM JAZZ MUSIC** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-audio`  
  **<span style="color:LightGray;">Subjects:</span>** music, jazz  
  
  
## Indoor Dweller  
**Grace Days:** 10  
**Online Times:** 00:00 to 21:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(87% of the time)</span>  
  
**Description:** A home-based person who handles work, shopping, and household tasks online. They stick to familiar websites unless better options appear.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server), [dnsmasq](programs.md/#dnsmasq)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **ORDER GROCERY DELIVERY** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-text and view-image and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** grocery, supplies  
- <span style="color:Yellow;">Use:</span> **DO WORK** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **DO PROJECT PLANNING** 50% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:LightGray;">Subjects:</span>** project-planning  
- <span style="color:Yellow;">Use:</span> **VIEW PRIVATE CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:LightGray;">Subjects:</span>** privacy  
  
  
## Patient Dweller  
**Grace Days:** 10  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** An individual who requires background tasks like large cloud backups, or data processing, but tolerant of interruptions as long as it completes eventually.   
  
They stick to familiar websites unless better options appear.  
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **VALIDATE DIGITAL PAYMENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( authenticate-transaction or facilitate-banking ) and not ( read-text or view-image or stream-audio or stream-video )`  
  **<span style="color:LightGray;">Subjects:</span>** b2c  
- <span style="color:Yellow;">Use:</span> **VIEW PUBLIC CONTENT** 25% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and not verify-user and not authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **DO WORK** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
- <span style="color:Yellow;">Use:</span> **ORDER ANY FOOD** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">2</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `view-image and read-text and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** food  
- <span style="color:Yellow;">Use:</span> **ONLINE INSTANT MESSAGING** 20% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `read-instant-messages or post-instant-messages`  
- <span style="color:Yellow;">Use:</span> **STORE BACKUP FILES** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">5</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
  
  
## Satellite Tower  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Internet exchange points are neighbouring buildings that exchange services with the current tower.    
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **VIEW PAID CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Aqua;">Host:</span> **HostImageTextPost**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, view-image, read-text`  
  **Scaling:** Survey  
  **Description:** host memes forum  
  
  
## Satellite Tower  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Internet exchange points are neighbouring buildings that exchange services with the current tower.    
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **VIEW PAID CONTENT** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image or stream-audio or stream-video ) and authenticate-transaction`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Aqua;">Host:</span> **HostImageTextPost**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-text, post-image, view-image, read-text`  
  **Scaling:** Survey  
  **Description:** host memes forum  
  
  
## Relax Tower  
**Grace Days:** 5  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Internet exchange points are neighbouring buildings that exchange services with the current tower.    
  
**Unlocks:** [voip-server](programs.md/#voip-server), [dns-lite](programs.md/#dns-lite), [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **EXCHANGE EMAIL** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or post-text ) and verify-user`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
- <span style="color:Aqua;">Host:</span> **HostLofiMusic**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-audio, stream-audio`  
  **Scaling:** Survey  
  **Description:** host lofi music channel  
  
  
## Animation Sphere  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A large-scale film production facility that serves as the central hub for animated content.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-image, post-video, accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostAnimationPlatform**  
  **<span style="color:DarkKhaki;">Produces:</span>** `post-image, post-video, authenticate-transaction, view-image, stream-video, accept-instruction`  
  **Scaling:** Survey  
  **Description:** host animation platform  
- <span style="color:Yellow;">Use:</span> **SEND NEWSLETTER** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and verify-user`  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 50% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## Animation Studios  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A creative production company that specializes in developing and producing animated content.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **POST ANY ANIMATION** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-image and post-video`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction, stream-video, view-image, accept-instruction`  
  **<span style="color:LightGray;">Subjects:</span>** animation, movie  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **STORE FILE** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( store-text or store-image or store-video ) and not tunnel-vpn-traffic`  
- <span style="color:Aqua;">Host:</span> **HostFreelanceWorkspace**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
  **Scaling:** Survey  
  **Description:** host freelance workspace  
  
  
## Central Mart  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A centralized mart that enables multiple household stores to create their own digital storefronts while providing integrated delivery and logistics services to connect local grocers.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-image, post-text, accept-instruction, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostGroceryDelivery**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-image, post-text, accept-instruction, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** grocery and food delivery  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## ESport Hub  
**Grace Days:** 3  
**Online Times:** 09:00 to 18:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(37% of the time)</span>  
  
**Description:** A E-sport streaming platform that employs professional gamers to broadcast live gameplay and provides viewers with access to watch these live gaming streams.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction`  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 20% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Aqua;">Host:</span> **HostGameStreaming**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction, stream-video`  
  **Scaling:** Visitors  
  **Description:** hires professional gamers to broadcast live gameplay and provides viewers with access to watch these live gaming streams.  
  
  
## Happy Grocery  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A retail establishment that sells food products, beverages, and household essentials for daily consumption.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 50% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **POST GROCERY MENU** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and post-image`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** grocery, supplies  
- <span style="color:Yellow;">Use:</span> **INVENTORY MANAGEMENT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(same provider)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `( read-text or view-image ) and authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** inventory-management  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostEcommerceSite**  
  **<span style="color:DarkKhaki;">Produces:</span>** `authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** host e-commerce site  
  
  
## Inventory Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An inventory management software company which automatically tracks, manages, and optimizes their clients' product inventory across multiple sales channels.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **SUBSCRIBE DATABASE SERVICE** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** database-as-a-service, b2b  
- <span style="color:Aqua;">Host:</span> **HostInventoryDashboard**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, authenticate-transaction`  
  **Scaling:** Survey  
  **Description:** track, manage, and optimize the clients' product inventory at a small fee  
- <span style="color:Yellow;">Use:</span> **SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software`  
  
  
## Semiconductor Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A place which provides comprehensive resources, collaboration tools, and expert support for academics, scientists, and researchers to conduct studies and share findings.  
  
**Unlocks:** [voip-server](programs.md/#voip-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Aqua;">Host:</span> **HostConfidentialResearch**  
  **<span style="color:DarkKhaki;">Produces:</span>** `accept-instruction, verify-user`  
  **Scaling:** Visitors  
  **Description:** host confidential research work  
  
  
## Sound Studios  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A specialized audio production facility that produces high-quality audio content for various media and entertainment projects.  
  
**Unlocks:**   
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **PAY COMMERCIAL UTILITIES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** commercial-utilities  
- <span style="color:Yellow;">Use:</span> **ACCEPT VENDOR CONTRACT** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `accept-instruction and not tunnel-vpn-traffic and not verify-user`  
  **<span style="color:LightGray;">Subjects:</span>** animation, movie  
  
  
## Transfer Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:**   
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostFileTransfer**  
  **<span style="color:DarkKhaki;">Produces:</span>** `store-text, store-image, post-text, post-image`  
  **Scaling:** Visitors  
  **Description:** file transfer site  
  
  
## Professional Club  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** An online discussion forum that requires users to verify their professional credentials before gaining access to view content or participate in discussions  
  
**Unlocks:**   
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ANTIVIRUS SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-text, post-image, post-video, stream-video`  
- <span style="color:Aqua;">Host:</span> **HostForumSocialMedia**  
  **<span style="color:DarkKhaki;">Produces:</span>** `read-text, view-image, post-text, post-image, post-video, stream-video`  
  **Scaling:** Visitors  
  **Description:** host professional forum  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Meeting Hub  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** Cloud-based platforms that enable high-quality video meetings, webinars, and real-time collaboration through secure, scalable communication technology for businesses, education, and personal use.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ANTIVIRUS SOFTWARE UPDATES** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `update-software and authenticate-transaction`  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-live-video, read-instant-messages, post-instant-messages, verify-user`  
- <span style="color:Aqua;">Host:</span> **HostVideoConferencing**  
  **<span style="color:DarkKhaki;">Produces:</span>** `stream-live-video, read-instant-messages, post-instant-messages, verify-user`  
  **Scaling:** Survey  
  **Description:** enabling real-time meetings  
  
  
## Antivirus Nexus  
**Grace Days:** 3  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A software company that provides antivirus software updates for their client.  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Yellow;">Use:</span> **ENABLE B2B BANKING** 100% @ [`tcp/443`](traffic_types.md/#tcp443) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Notes:** Backend service  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `facilitate-banking`  
  **<span style="color:DarkKhaki;">Produces:</span>** `update-software, authenticate-transaction`  
  **<span style="color:LightGray;">Subjects:</span>** b2b  
- <span style="color:Aqua;">Host:</span> **HostAntivirusUpdate**  
  **<span style="color:DarkKhaki;">Produces:</span>** `update-software, authenticate-transaction`  
  **Scaling:** Visitors  
  **Description:** release antivirus software update  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
  
  
## Privacy Hub  
**Grace Days:** 10  
**Online Times:** 00:00 to 24:00 <span style="color:gray;font-size:85%;white-space:nowrap;">(100% of the time)</span>  
  
**Description:** A software company that releases software updates which protect personal information and anonymity for their clients  
  
**Unlocks:** [dns-server](programs.md/#dns-server)  
  
**Behaviors:**  
- <span style="color:Aqua;">Host:</span> **HostPrivacySoftwareUpdate**  
  **<span style="color:DarkKhaki;">Produces:</span>** `update-software`  
  **Scaling:** Visitors  
  **Description:** release privacy software update  
- <span style="color:Yellow;">Use:</span> **TALK TO SOMEONE ONLINE** 100% @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(random providers)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `stream-voice`  
- <span style="color:Yellow;">Use:</span> **SEND NEWSLETTER** 100% @ [`tcp/80`](traffic_types.md/#tcp80) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(providers by market share)</span>  
  **Satiety on Consume:** for producer <span style="color:YellowGreen;">1</span>, for user <span style="color:YellowGreen;">1</span>  
  **<span style="color:PapayaWhip;">Consumes:</span>** `post-text and verify-user`  
  
