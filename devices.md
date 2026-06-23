# Devices
GENERATED FOR TNI VERSION 0.11.2
[Zodianet Beam Router](#zodianet-beam-router)  
[Zodianet Spine Router](#zodianet-spine-router)  
[MacroHard NLB2](#macrohard-nlb2)  
[Debugger Alice](#debugger-alice)  
[DNS UDP/53 Load Tester](#dns-udp/53-load-tester)  
[LoadTester Bob](#loadtester-bob)  
[Dvergar](#dvergar)  
[golonys-cinco](#golonys-cinco)  
[ICC1](#icc1)  
[Bastion 5E](#bastion-5e)  
[EthTapper](#ethtapper)  
[FireWatch CP4E](#firewatch-cp4e)  
[FireWatch ES4A](#firewatch-es4a)  
[Duplex 1C](#duplex-1c)  
[Duplex 3C](#duplex-3c)  
[Simplex 452F 1C](#simplex-452f-1c)  
[Simplex 452F 3C](#simplex-452f-3c)  
[Simplex SC245 1C](#simplex-sc245-1c)  
[Simplex SC245 3C](#simplex-sc245-3c)  
[Duplex RJ45 1R](#duplex-rj45-1r)  
[Duplex RJ45 3R](#duplex-rj45-3r)  
[Duplex SC 1R](#duplex-sc-1r)  
[Duplex SC 3R](#duplex-sc-3r)  
[Simplex RJ45 1R](#simplex-rj45-1r)  
[Simplex RJ45 3R](#simplex-rj45-3r)  
[Simplex SC 1R](#simplex-sc-1r)  
[Simplex SC 3R](#simplex-sc-3r)  
[Momento Entries Monitor](#momento-entries-monitor)  
[Population Stats Monitor](#population-stats-monitor)  
[Satiety Stats Monitor](#satiety-stats-monitor)  
[Surveyor Monitor](#surveyor-monitor)  
[Top Issue Monitor](#top-issue-monitor)  
[Visitor Stats Monitor](#visitor-stats-monitor)  
[Disco Kilo](#disco-kilo)  
[Disco Kilo 2G](#disco-kilo-2g)  
[Disco Kilo 3G](#disco-kilo-3g)  
[Disco Micro](#disco-micro)  
[Disco Micro 2G](#disco-micro-2g)  
[Disco Micro 3G](#disco-micro-3g)  
[Disco Milli](#disco-milli)  
[Disco Milli 2G](#disco-milli-2g)  
[Disco Milli 3G](#disco-milli-3g)  
[Disco Milli 4G](#disco-milli-4g)  
[Disco Nano](#disco-nano)  
[Disco Nano2G](#disco-nano2g)  
[Disco Nano3H](#disco-nano3h)  
[Test Router](#test-router)  
[Savannah Aardvark](#savannah-aardvark)  
[Savannah Gazelle](#savannah-gazelle)  
[Savannah Meerkat](#savannah-meerkat)  
[Savannah Wildebeest](#savannah-wildebeest)  
[MacroHard Boulder SRV](#macrohard-boulder-srv)  
[MacroHard Boulder++ SRV](#macrohard-boulder++-srv)  
[MacroHard Boulder+ SRV](#macrohard-boulder+-srv)  
[MacroHard Ledge Three SRV](#macrohard-ledge-three-srv)  
[MacroHard Ledge Two SRV](#macrohard-ledge-two-srv)  
[MacroHard Megalith SRV](#macrohard-megalith-srv)  
[MacroHard Monolith SRV](#macrohard-monolith-srv)  
[Avex Secretary](#avex-secretary)  
[Avex Skua](#avex-skua)  
[Avex Sparrow](#avex-sparrow)  
[Avex Starling](#avex-starling)  
[Avex Swallow](#avex-swallow)  
[Test Server](#test-server)  
[Blade88](#blade88)  
[Blade15](#blade15)  
[Blade1515](#blade1515)  
[Blade5](#blade5)  
[Blade4](#blade4)  
[Blade66](#blade66)  
[Blade10](#blade10)  
[Blade30](#blade30)  
[Blade12](#blade12)

## Zodianet Beam Router  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 450  
**Watts:** 138 **Price:** 3700  
**Port Counts:** 4x FIBER_OPTIC_SC, 2x B_3PIN  
  
**Description:**  
4-port core router.  
Handles up to 450 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 138W.  
Mountable on 630px racks.  
High bandwidth router for core networking.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Zodianet Spine Router  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 250  
**Watts:** 78 **Price:** 1200  
**Port Counts:** 3x FIBER_OPTIC_SC, 2x B_3PIN  
  
**Description:**  
3-port core router.  
Handles up to 250 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 78W.  
Mountable on 630px racks.  
High bandwidth router for core networking.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## MacroHard NLB2  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 80  
**Watts:** 83 **Price:** 350  
**Port Counts:** 4x RJ45, 1x B_3PIN  
  
**Description:**  
2-2 hardware-based round-robin network load balancer.  
Handles up to 80 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 83W.  
Mountable on 500px racks.  
Traffic from either front ports are alternated between the back ports.  
  
  
**Installed Programs:** [lbrr](programs.md/#lbrr)  
  
  
## Debugger Alice  
**CPU:** 1 **MEM:** 1 **SIZE:** 1 **BW/t:** 12  
**Watts:** 33 **Price:** 1000  
**Port Counts:** 2x RJ45, 1x B_3PIN  
  
**Description:**  
2-port ethernet remote debugger.  
Not rack mountable.  
  
  
**Installed Programs:** [netpeeker](programs.md/#netpeeker)  
  
  
## DNS UDP/53 Load Tester  
**CPU:** 1 **MEM:** 1 **SIZE:** 1 **BW/t:** 6  
**Watts:** 203 **Price:** 1000  
**Port Counts:** 1x RJ45, 1x B_3PIN  
  
**Description:**  
1-port ethernet load tester. Blasts UDP/53 DNS query traffic.  
Not rack mountable.  
  
  
**Installed Programs:** [dnsspam](programs.md/#dnsspam)  
  
  
## LoadTester Bob  
**CPU:** 1 **MEM:** 1 **SIZE:** 1 **BW/t:** 6  
**Watts:** 203 **Price:** 1000  
**Port Counts:** 1x RJ45, 1x B_3PIN  
  
**Description:**  
1-port ethernet load tester.  
Not rack mountable.  
  
  
**Installed Programs:** [dnsspam](programs.md/#dnsspam), [loadtester2](programs.md/#loadtester2)  
  
  
## Dvergar  
**CPU:** 24 **MEM:** 16 **SIZE:** 8 **BW/t:** 40  
**Watts:** 523 **Price:** 1100  
**Port Counts:** 1x RJ45, 1x B_3PIN  
  
**Description:**  
Decentro mining rig.  
Specs: 24 CPU, 16 memory and 8 storage.  
Handles up to 40 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 523W.  
Not rack mountable.  
Provides Decentro transaction verification to the p2p currency network.  
  
  
**Installed Programs:** [decentro-node](programs.md/#decentro-node)  
  
  
## golonys-cinco  
**CPU:** 1 **MEM:** 1 **SIZE:** 1 **BW/t:** 6  
**Watts:** 13 **Price:** 400  
**Port Counts:** 5x SATA35_SLOT, 1x RJ45, 1x B_3PIN  
  
**Description:**  
1-port network storage device.  
Specs: 1 CPU, 1 memory and 1 storage.  
Handles up to 6 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 13W.  
Not rack mountable.  
Comes with 5 SATA 3.5" expansion slots.  
  
  
  
## ICC1  
**CPU:** 1 **MEM:** 2 **SIZE:** 2 **BW/t:** 6  
**Watts:** 19 **Price:** 160  
**Port Counts:** 1x RJ45, 1x SATA35_SLOT, 1x B_3PIN  
  
**Description:**  
1-port modular computing unit.  
Specs: 1 CPU, 2 memory and 2 storage.  
Handles up to 6 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 19W.  
Not rack mountable.  
Homelab equipment.  
  
  
  
## Bastion 5E  
**CPU:** 6 **MEM:** 6 **SIZE:** 5 **BW/t:** 384  
**Watts:** 387 **Price:** 3000  
**Port Counts:** 4x RJ45, 1x A_USB, 1x B_3PIN  
  
**Description:**  
Top of the line enterprise grade network firewall.  
Handles up to 384 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 387W.  
Mountable on 930px racks.  
  
  
**Installed Programs:** [firewatcher](programs.md/#firewatcher), [wirerat](programs.md/#wirerat)  
  
  
## EthTapper  
**CPU:** 2 **MEM:** 2 **SIZE:** 1 **BW/t:** 18  
**Watts:** 12 **Price:** 300  
**Port Counts:** 3x RJ45, 1x B_3PIN  
  
**Description:**  
Ethernet in-line network tap with port-mirroring capabilities. Produces packet traffic captures.  
Handles up to 18 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 12W.  
Not rack mountable.  
  
  
**Installed Programs:** [wirerat](programs.md/#wirerat)  
  
  
## FireWatch CP4E  
**CPU:** 6 **MEM:** 4 **SIZE:** 3 **BW/t:** 160  
**Watts:** 163 **Price:** 1500  
**Port Counts:** 4x RJ45, 1x A_USB, 1x B_3PIN  
  
**Description:**  
Ethernet in-line network traffic monitoring and filtering system.  
Handles up to 160 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 163W.  
Mountable on 500px racks.  
  
  
**Installed Programs:** [firewatcher](programs.md/#firewatcher), [wirerat](programs.md/#wirerat)  
  
  
## FireWatch ES4A  
**CPU:** 6 **MEM:** 3 **SIZE:** 3 **BW/t:** 52  
**Watts:** 55 **Price:** 550  
**Port Counts:** 1x FIBER_OPTIC_SC, 2x RJ45, 1x A_USB, 1x B_3PIN  
  
**Description:**  
Mixed medium in-line network traffic monitoring and filtering system.  
Handles up to 52 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 55W.  
Mountable on 500px racks.  
  
  
**Installed Programs:** [firewatcher](programs.md/#firewatcher), [wirerat](programs.md/#wirerat)  
  
  
## Duplex 1C  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 18  
**Watts:** 7 **Price:** 60  
**Port Counts:** 1x RJ45, 1x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Duplex (bidirectional) media converter.  
Handles up to 18 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 7W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Duplex 3C  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 54  
**Watts:** 8 **Price:** 240  
**Port Counts:** 1x RJ45, 1x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Duplex (bidirectional) media converter.  
Handles up to 54 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 8W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex 452F 1C  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 30  
**Watts:** 9 **Price:** 40  
**Port Counts:** 1x RJ45, 1x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
RJ45 to Fiber optic SC simplex (unidirection) media converter.  
Handles up to 30 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 9W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex 452F 3C  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 90  
**Watts:** 12 **Price:** 160  
**Port Counts:** 1x RJ45, 1x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
RJ45 to Fiber optic SC simplex (unidirection) media converter.  
Handles up to 90 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 12W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex SC245 1C  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 30  
**Watts:** 9 **Price:** 40  
**Port Counts:** 1x RJ45, 1x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Fiber optic SC to RJ45 simplex (unidirection) media converter.  
Handles up to 30 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 9W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex SC245 3C  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 90  
**Watts:** 12 **Price:** 160  
**Port Counts:** 1x RJ45, 1x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Fiber optic SC to RJ45 simplex (unidirection) media converter.  
Handles up to 90 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 12W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Duplex RJ45 1R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 12  
**Watts:** 6 **Price:** 50  
**Port Counts:** 2x RJ45, 1x DC_JACK  
  
**Description:**  
RJ45 bidirectional media repeater.  
Handles up to 12 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 6W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Duplex RJ45 3R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 36  
**Watts:** 7 **Price:** 200  
**Port Counts:** 2x RJ45, 1x DC_JACK  
  
**Description:**  
RJ45 bidirectional media repeater.  
Handles up to 36 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 7W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Duplex SC 1R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 24  
**Watts:** 8 **Price:** 50  
**Port Counts:** 2x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Fiber optic SC bidirectional media repeater.  
Handles up to 24 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 8W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Duplex SC 3R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 72  
**Watts:** 10 **Price:** 200  
**Port Counts:** 2x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Fiber optic SC bidirectional media repeater.  
Handles up to 72 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 10W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex RJ45 1R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 20  
**Watts:** 7 **Price:** 30  
**Port Counts:** 2x RJ45, 1x DC_JACK  
  
**Description:**  
RJ45 unidirectional media repeater.  
Handles up to 20 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 7W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex RJ45 3R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 60  
**Watts:** 9 **Price:** 120  
**Port Counts:** 2x RJ45, 1x DC_JACK  
  
**Description:**  
RJ45 unidirectional media repeater.  
Handles up to 60 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 9W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex SC 1R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 40  
**Watts:** 11 **Price:** 30  
**Port Counts:** 2x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Fiber optic SC unidirectional media repeater.  
Handles up to 40 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 11W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Simplex SC 3R  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 120  
**Watts:** 15 **Price:** 120  
**Port Counts:** 2x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
Fiber optic SC unidirectional media repeater.  
Handles up to 120 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 15W.  
Not rack mountable.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Momento Entries Monitor  
**CPU:** 0 **MEM:** 0 **SIZE:** 0 **BW/t:** 1  
**Watts:** 13 **Price:** 500  
**Port Counts:** 1x B_3PIN  
  
**Description:**  
Extra monitor which displays all the DNS-entries mapping, network address assignments and device location.  
Not rack mountable.  
  
  
  
## Population Stats Monitor  
**CPU:** 0 **MEM:** 0 **SIZE:** 0 **BW/t:** 1  
**Watts:** 13 **Price:** 1  
**Port Counts:** 1x B_3PIN  
  
**Description:**  
Extra monitor displaying the total population count in the tower, available for sale.  
Not rack mountable.  
  
  
  
## Satiety Stats Monitor  
**CPU:** 0 **MEM:** 0 **SIZE:** 0 **BW/t:** 1  
**Watts:** 13 **Price:** 500  
**Port Counts:** 1x B_3PIN  
  
**Description:**  
Extra monitor displaying resident satiety levels, available for sale.  
Not rack mountable.  
  
  
  
## Surveyor Monitor  
**CPU:** 0 **MEM:** 0 **SIZE:** 0 **BW/t:** 1  
**Watts:** 13 **Price:** 1  
**Port Counts:** 1x B_3PIN  
  
**Description:**  
Extra monitor which can be used to monitor the users under your internet service's purview  
Not rack mountable.  
  
  
  
## Top Issue Monitor  
**CPU:** 0 **MEM:** 0 **SIZE:** 0 **BW/t:** 1  
**Watts:** 13 **Price:** 300  
**Port Counts:** 1x B_3PIN  
  
**Description:**  
Extra monitor displaying top floor issues, available for sale.  
Not rack mountable.  
  
  
  
## Visitor Stats Monitor  
**CPU:** 0 **MEM:** 0 **SIZE:** 0 **BW/t:** 1  
**Watts:** 13 **Price:** 300  
**Port Counts:** 1x B_3PIN  
  
**Description:**  
Extra monitor displaying visitor count by domain name, available for sale.  
Not rack mountable.  
  
  
  
## Disco Kilo  
**CPU:** 5 **MEM:** 2 **SIZE:** 6 **BW/t:** 120  
**Watts:** 42 **Price:** 1230  
**Port Counts:** 6x RJ45, 4x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network capable router.  
Handles up to 120 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 42W.  
Mountable on 930px racks.  
Allows VLAN subinterfaces.  
  
  
**Installed Programs:** [vrout3](programs.md/#vrout3)  
  
  
## Disco Kilo 2G  
**CPU:** 5 **MEM:** 2 **SIZE:** 6 **BW/t:** 180  
**Watts:** 67 **Price:** 1500  
**Port Counts:** 6x RJ45, 4x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network capable router.  
Handles up to 180 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 67W.  
Mountable on 930px racks.  
Allows VLAN subinterfaces. Improved BW performance.  
  
  
**Installed Programs:** [vrout3](programs.md/#vrout3)  
  
  
## Disco Kilo 3G  
**CPU:** 5 **MEM:** 2 **SIZE:** 6 **BW/t:** 240  
**Watts:** 111 **Price:** 1950  
**Port Counts:** 6x RJ45, 4x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network capable router.  
Handles up to 240 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 111W.  
Mountable on 930px racks.  
Allows VLAN subinterfaces. Improved BW performance.  
  
  
**Installed Programs:** [vrout3](programs.md/#vrout3)  
  
  
## Disco Micro  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 125  
**Watts:** 41 **Price:** 600  
**Port Counts:** 5x RJ45, 5x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network router.  
Handles up to 125 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 41W.  
Mountable on 500px racks.  
Suitable for small businesses.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Disco Micro 2G  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 162  
**Watts:** 47 **Price:** 950  
**Port Counts:** 5x RJ45, 5x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network router.  
Handles up to 162 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 47W.  
Mountable on 500px racks.  
Improved performance and maximum throughput.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Disco Micro 3G  
**CPU:** 8 **MEM:** 2 **SIZE:** 4 **BW/t:** 175  
**Watts:** 50 **Price:** 1300  
**Port Counts:** 5x RJ45, 5x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network router.  
Handles up to 175 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 50W.  
Mountable on 500px racks.  
3rd generation edition. Supports high-availability setups.  
  
  
**Installed Programs:** [hakernel](programs.md/#hakernel)  
  
  
## Disco Milli  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 80  
**Watts:** 27 **Price:** 325  
**Port Counts:** 8x RJ45, 1x B_3PIN  
  
**Description:**  
8-port ethernet network router.  
Handles up to 80 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 27W.  
Mountable on 630px racks.  
Economical model for medium sized enterprises.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Disco Milli 2G  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 112  
**Watts:** 30 **Price:** 500  
**Port Counts:** 8x RJ45, 1x B_3PIN  
  
**Description:**  
8-port ethernet network router.  
Handles up to 112 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 30W.  
Mountable on 630px racks.  
Economical model for medium sized enterprises.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Disco Milli 3G  
**CPU:** 8 **MEM:** 2 **SIZE:** 4 **BW/t:** 160  
**Watts:** 41 **Price:** 800  
**Port Counts:** 8x RJ45, 1x B_3PIN  
  
**Description:**  
8-port ethernet network router.  
Handles up to 160 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 41W.  
Mountable on 630px racks.  
Economical model for medium sized enterprises. High-availability support.  
  
  
**Installed Programs:** [hakernel](programs.md/#hakernel)  
  
  
## Disco Milli 4G  
**CPU:** 8 **MEM:** 2 **SIZE:** 4 **BW/t:** 240  
**Watts:** 60 **Price:** 1150  
**Port Counts:** 8x RJ45, 1x B_3PIN  
  
**Description:**  
8-port ethernet network router.  
Handles up to 240 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 60W.  
Mountable on 630px racks.  
Economical model for medium sized enterprises. High-availability support.  
  
  
**Installed Programs:** [hakernel](programs.md/#hakernel)  
  
  
## Disco Nano  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 60  
**Watts:** 21 **Price:** 220  
**Port Counts:** 2x FIBER_OPTIC_SC, 3x RJ45, 1x DC_JACK  
  
**Description:**  
5-port mixed-media network router. Small form factor suitable for routing on the edge.  
Handles up to 60 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 21W.  
Not rack mountable.  
Uses DC power.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Disco Nano2G  
**CPU:** 4 **MEM:** 1 **SIZE:** 2 **BW/t:** 65  
**Watts:** 23 **Price:** 180  
**Port Counts:** 2x RJ45, 2x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
4-port mixed-media network router. 2nd generation edge routing device with even smaller form factor. Less is more.  
Handles up to 65 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 23W.  
Not rack mountable.  
Uses DC power.  
  
  
**Installed Programs:** [rtkernel](programs.md/#rtkernel)  
  
  
## Disco Nano3H  
**CPU:** 8 **MEM:** 2 **SIZE:** 4 **BW/t:** 75  
**Watts:** 26 **Price:** 450  
**Port Counts:** 2x RJ45, 2x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
4-port mixed-media network router. 3rd generation edge routing device with high availability support.  
Handles up to 75 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 26W.  
Not rack mountable.  
Uses DC power.  
  
  
**Installed Programs:** [hakernel](programs.md/#hakernel)  
  
  
## Test Router  
**CPU:** 8 **MEM:** 4 **SIZE:** 4 **BW/t:** 125  
**Watts:** 41 **Price:** 1  
**Port Counts:** 5x RJ45, 5x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
10-port mixed media network router.  
Handles up to 125 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 41W.  
Not rack mountable.  
Suitable for small businesses.  
  
  
**Installed Programs:** [hakernel](programs.md/#hakernel)  
  
  
## Savannah Aardvark  
**CPU:** 10 **MEM:** 10 **SIZE:** 5 **BW/t:** 65  
**Watts:** 293 **Price:** 4500  
**Port Counts:** 2x RJ45, 1x FIBER_OPTIC_SC, 2x SATA35_SLOT, 2x B_3PIN  
  
**Description:**  
3-port general computing server.  
Specs: 10 CPU, 10 memory and 5 storage.  
Handles up to 65 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 293W.  
Mountable on 500px racks.  
2 extensible SATA 3.5" slot.  
  
  
  
## Savannah Gazelle  
**CPU:** 6 **MEM:** 6 **SIZE:** 6 **BW/t:** 24  
**Watts:** 108 **Price:** 2200  
**Port Counts:** 2x RJ45, 2x B_3PIN  
  
**Description:**  
2-port general computing server.  
Specs: 6 CPU, 6 memory and 6 storage.  
Handles up to 24 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 108W.  
Mountable on 500px racks.  
The gazelle is a durable device that is designed to last long in high load conditions.  
  
  
  
## Savannah Meerkat  
**CPU:** 4 **MEM:** 4 **SIZE:** 4 **BW/t:** 16  
**Watts:** 62 **Price:** 950  
**Port Counts:** 2x RJ45, 1x B_3PIN  
  
**Description:**  
2-port general computing server.  
Specs: 4 CPU, 4 memory and 4 storage.  
Handles up to 16 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 62W.  
Not rack mountable.  
Scalable compute.  
  
  
  
## Savannah Wildebeest  
**CPU:** 16 **MEM:** 16 **SIZE:** 8 **BW/t:** 104  
**Watts:** 423 **Price:** 6800  
**Port Counts:** 2x RJ45, 1x FIBER_OPTIC_SC, 2x SATA35_SLOT, 2x B_3PIN  
  
**Description:**  
3-port general computing server.  
Specs: 16 CPU, 16 memory and 8 storage.  
Handles up to 104 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 423W.  
Mountable on 500px racks.  
2 extensible SATA 3.5" slot.  
  
  
  
## MacroHard Boulder SRV  
**CPU:** 4 **MEM:** 4 **SIZE:** 6 **BW/t:** 16  
**Watts:** 72 **Price:** 450  
**Port Counts:** 2x RJ45, 1x B_3PIN  
  
**Description:**  
2-port general computing server.  
Specs: 4 CPU, 4 memory and 6 storage.  
Handles up to 16 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 72W.  
Mountable on 500px racks.  
Suitable for small businesses.  
  
  
  
## MacroHard Boulder++ SRV  
**CPU:** 6 **MEM:** 10 **SIZE:** 10 **BW/t:** 48  
**Watts:** 312 **Price:** 1400  
**Port Counts:** 3x RJ45, 2x B_3PIN  
  
**Description:**  
3-port general computing server.  
Specs: 6 CPU, 10 memory and 10 storage.  
Handles up to 48 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 312W.  
Mountable on 500px racks.  
High performance model with extra bandwidth.  
  
  
  
## MacroHard Boulder+ SRV  
**CPU:** 6 **MEM:** 8 **SIZE:** 8 **BW/t:** 28  
**Watts:** 161 **Price:** 850  
**Port Counts:** 2x RJ45, 2x B_3PIN  
  
**Description:**  
2-port general computing server.  
Specs: 6 CPU, 8 memory and 8 storage.  
Handles up to 28 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 161W.  
Mountable on 500px racks.  
High performance model.  
  
  
  
## MacroHard Ledge Three SRV  
**CPU:** 24 **MEM:** 16 **SIZE:** 4 **BW/t:** 208  
**Watts:** 1125 **Price:** 3200  
**Port Counts:** 2x SATA35_SLOT, 4x FIBER_OPTIC_SC, 2x B_3PIN  
  
**Description:**  
4-port high bandwidth computing server.  
Specs: 24 CPU, 16 memory and 4 storage.  
Handles up to 208 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 1125W.  
Mountable on 500px racks.  
Fiber enabled compute server.  
  
  
  
## MacroHard Ledge Two SRV  
**CPU:** 24 **MEM:** 14 **SIZE:** 4 **BW/t:** 150  
**Watts:** 973 **Price:** 2100  
**Port Counts:** 2x SATA35_SLOT, 3x FIBER_OPTIC_SC, 2x B_3PIN  
  
**Description:**  
3-port high bandwidth computing server.  
Specs: 24 CPU, 14 memory and 4 storage.  
Handles up to 150 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 973W.  
Mountable on 500px racks.  
Fiber enabled compute server.  
  
  
  
## MacroHard Megalith SRV  
**CPU:** 32 **MEM:** 16 **SIZE:** 4 **BW/t:** 240  
**Watts:** 1223 **Price:** 3800  
**Port Counts:** 5x RJ45, 6x SATA35_SLOT, 2x B_3PIN  
  
**Description:**  
5-port high performance computing server.  
Specs: 32 CPU, 16 memory and 4 storage.  
Handles up to 240 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 1223W.  
Not rack mountable.  
Comes with 6 SATA 3.5" expansion slot.  
  
  
  
## MacroHard Monolith SRV  
**CPU:** 16 **MEM:** 10 **SIZE:** 4 **BW/t:** 52  
**Watts:** 429 **Price:** 1680  
**Port Counts:** 2x RJ45, 2x SATA35_SLOT, 2x B_3PIN  
  
**Description:**  
2-port general computing server.  
Specs: 16 CPU, 10 memory and 4 storage.  
Handles up to 52 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 429W.  
Mountable on 500px racks.  
Comes with 2 SATA 3.5" expansion slot  
  
  
  
## Avex Secretary  
**CPU:** 23 **MEM:** 13 **SIZE:** 10 **BW/t:** 168  
**Watts:** 953 **Price:** 3150  
**Port Counts:** 2x RJ45, 2x FIBER_OPTIC_SC, 2x SATA35_SLOT, 2x B_3PIN  
  
**Description:**  
4-port high-performance compute server  
Specs: 23 CPU, 13 memory and 10 storage.  
Handles up to 168 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 953W.  
Mountable on 630px racks.  
Comes with 2 SATA 3.5" expansion slot  
  
Spacious and efficient. Perfect for businesses with growing data needs.  
  
  
  
## Avex Skua  
**CPU:** 12 **MEM:** 16 **SIZE:** 4 **BW/t:** 90  
**Watts:** 723 **Price:** 3000  
**Port Counts:** 2x RJ45, 2x SATA35_SLOT, 1x FIBER_OPTIC_SC, 2x B_3PIN  
  
**Description:**  
3-port high-memory performance server  
Specs: 12 CPU, 16 memory and 4 storage.  
Handles up to 90 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 723W.  
Mountable on 630px racks.  
Comes with 2 SATA 3.5" expansion slot  
  
Powerful and responsive. Perfect for businesses with intensive operations.  
  
  
  
## Avex Sparrow  
**CPU:** 3 **MEM:** 4 **SIZE:** 8 **BW/t:** 21  
**Watts:** 88 **Price:** 1100  
**Port Counts:** 3x RJ45, 1x B_3PIN  
  
**Description:**  
3-port entry-level server  
Specs: 3 CPU, 4 memory and 8 storage.  
Handles up to 21 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 88W.  
Mountable on 630px racks.  
Compact and cost-efficient. Perfect for businesses in early deployment  
  
  
  
## Avex Starling  
**CPU:** 7 **MEM:** 6 **SIZE:** 7 **BW/t:** 39  
**Watts:** 191 **Price:** 1150  
**Port Counts:** 3x RJ45, 2x B_3PIN  
  
**Description:**  
3-port balanced compute server  
Specs: 7 CPU, 6 memory and 7 storage.  
Handles up to 39 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 191W.  
Mountable on 630px racks.  
Balanced and dependable. Perfect for businesses in steady expansion.  
  
  
  
## Avex Swallow  
**CPU:** 4 **MEM:** 8 **SIZE:** 12 **BW/t:** 38  
**Watts:** 200 **Price:** 3000  
**Port Counts:** 2x RJ45, 2x SATA35_SLOT, 1x FIBER_OPTIC_SC, 2x B_3PIN  
  
**Description:**  
3-port high-capacity storage server  
Specs: 4 CPU, 8 memory and 12 storage.  
Handles up to 38 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 200W.  
Mountable on 630px racks.  
Comes with 2 SATA 3.5" expansion slot  
  
Spacious and efficient. Perfect for businesses with growing data needs.  
  
  
  
## Test Server  
**CPU:** 32 **MEM:** 32 **SIZE:** 32 **BW/t:** 50  
**Watts:** 703 **Price:** 700  
**Port Counts:** 2x RJ45, 2x B_3PIN  
  
**Description:**  
2-port general computing server.  
Specs: 32 CPU, 32 memory and 32 storage.  
Handles up to 50 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 703W.  
Mountable on 500px racks.  
High performance model.  
  
  
  
## Blade88  
**CPU:** 2 **MEM:** 2 **SIZE:** 2 **BW/t:** 336  
**Watts:** 37 **Price:** 1088  
**Port Counts:** 8x FIBER_OPTIC_SC, 8x RJ45, 1x B_3PIN  
  
**Description:**  
16-port mixed media network managed switch. Supports VLAN port tagging.  
Handles up to 336 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 37W.  
Mountable on 930px racks.  
This device is well sought after in the second hand market.  
  
  
**Installed Programs:** [vlanfirm](programs.md/#vlanfirm)  
  
  
## Blade15  
**CPU:** 2 **MEM:** 2 **SIZE:** 2 **BW/t:** 270  
**Watts:** 43 **Price:** 815  
**Port Counts:** 15x RJ45, 1x B_3PIN  
  
**Description:**  
15-port ethernet managed network switch. Supports VLAN port tagging.  
Handles up to 270 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 43W.  
Mountable on 930px racks.  
More ports at a cheaper price.  
  
  
**Installed Programs:** [vlanfirm](programs.md/#vlanfirm)  
  
  
## Blade1515  
**CPU:** 2 **MEM:** 2 **SIZE:** 2 **BW/t:** 630  
**Watts:** 84 **Price:** 1815  
**Port Counts:** 15x FIBER_OPTIC_SC, 15x RJ45, 1x B_3PIN  
  
**Description:**  
30-port mixed media network switch.   
Supports VLAN port tagging.  
Handles up to 630 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 84W.  
Mountable on 930px racks.  
Enterprise grade equipment.  
  
  
**Installed Programs:** [vlanfirm](programs.md/#vlanfirm)  
  
  
## Blade5  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 25  
**Watts:** 6 **Price:** 100  
**Port Counts:** 5x RJ45, 1x DC_JACK  
  
**Description:**  
5-port ethernet network switch.  
Handles up to 25 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 6W.  
Mountable on 500px racks.  
Suitable for entry-level networks.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Blade4  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 36  
**Watts:** 7 **Price:** 100  
**Port Counts:** 4x FIBER_OPTIC_SC, 1x DC_JACK  
  
**Description:**  
4-port fiber-optic network switch.  
Handles up to 36 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 7W.  
Mountable on 500px racks.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Blade66  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 88  
**Watts:** 12 **Price:** 466  
**Port Counts:** 6x FIBER_OPTIC_SC, 6x RJ45, 1x B_3PIN  
  
**Description:**  
12-port mixed media network switch.  
Handles up to 88 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 12W.  
Mountable on 930px racks.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Blade10  
**CPU:** 2 **MEM:** 1 **SIZE:** 1 **BW/t:** 50  
**Watts:** 8 **Price:** 230  
**Port Counts:** 10x RJ45, 1x B_3PIN  
  
**Description:**  
10-port ethernet network switch.  
Handles up to 50 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 8W.  
Mountable on 500px racks.  
  
  
**Installed Programs:** [bladeos](programs.md/#bladeos)  
  
  
## Blade30  
**CPU:** 2 **MEM:** 2 **SIZE:** 2 **BW/t:** 540  
**Watts:** 89 **Price:** 1630  
**Port Counts:** 30x RJ45, 1x B_3PIN  
  
**Description:**  
30-port ethernet managed network switch. Supports VLAN port tagging.  
Handles up to 540 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 89W.  
Mountable on 930px racks.  
Enterprise grade equipment. Consumes high power to support throughput.  
  
  
**Installed Programs:** [vlanfirm](programs.md/#vlanfirm)  
  
  
## Blade12  
**CPU:** 2 **MEM:** 2 **SIZE:** 2 **BW/t:** 288  
**Watts:** 32 **Price:** 712  
**Port Counts:** 12x FIBER_OPTIC_SC, 1x B_3PIN  
  
**Description:**  
12-port fiber-optic managed network switch. Supports VLAN port tagging.  
Handles up to 288 traversals per tick.  
CPU cycles 1 tick every 2.0 seconds.  
Power consumption: 32W.  
Mountable on 930px racks.  
  
  
**Installed Programs:** [vlanfirm](programs.md/#vlanfirm)  
  
