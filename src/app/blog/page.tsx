import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '../_components/BlogLayout';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Guides and notes from personal infrastructure projects.',
    openGraph: {
        title: 'Blog | Michael Kick',
        description: 'Guides and notes from personal infrastructure projects.',
    },
};

const CodeBlock = ({ children }: { children: string }) => (
    <pre className="rounded-lg border border-border bg-contrastDark p-4 text-sm text-text font-jetbrains overflow-x-auto">
        <code>{children}</code>
    </pre>
);

const pivpnTitle = 'PiVPN on Raspberry Pi with WireGuard';
const pivpnIntro =
    'A practical walkthrough for setting up a secure WireGuard VPN on a Raspberry Pi, including static IPs, dynamic DNS, router forwarding, and client onboarding.';

const pivpnSections = [
    {
        title: '1. Assign a static IP address',
        paragraphs: [
            'A fixed LAN address keeps SSH access, port forwarding, and VPN routing stable.',
            'Edit the DHCP client configuration and add a static profile:',
            <CodeBlock key="static-ip-edit">{`sudo nano /etc/dhcpcd.conf`}</CodeBlock>,
            <CodeBlock key="static-ip-config">{`interface eth0
static ip_address=YOUR_IP/24
static routers=YOUR_ROUTER_IP
static domain_name_servers=YOUR_DNS_IP`}</CodeBlock>,
            'Reboot to apply the changes:',
            <CodeBlock key="static-ip-reboot">{`sudo reboot`}</CodeBlock>,
        ],
    },
    {
        title: '2. Install PiVPN with WireGuard',
        paragraphs: [
            'Run the installer:',
            <CodeBlock key="pivpn-install">{`curl -L https://install.pivpn.io | bash`}</CodeBlock>,
            'During setup, choose the following options for a secure and reliable baseline:',
        ],
        bullets: [
            'Enable unattended security updates.',
            'Select UDP as the protocol.',
            'Pick a custom port instead of the default.',
            'Choose WireGuard as the VPN type.',
            'Configure a DDNS provider if your public IP changes.',
        ],
    },
    {
        title: '3. Configure dynamic DNS with ddclient',
        paragraphs: [
            'Dynamic DNS keeps a hostname pointed at your current public IP.',
            'Install ddclient:',
            <CodeBlock key="ddclient-install">{`sudo apt install ddclient`}</CodeBlock>,
            'Create the configuration file. Example for FreeDNS (afraid.org):',
            <CodeBlock key="ddclient-config">{`daemon=5m
timeout=10
syslog=no
pid=/var/run/ddclient.pid
ssl=yes

use=if, if=eth0
server=freedns.afraid.org
protocol=freedns
login=YOUR_USERNAME
password=YOUR_PASSWORD
your-subdomain.example.com`}</CodeBlock>,
            'Ensure the daemon is enabled and runs every 5 minutes:',
            <CodeBlock key="ddclient-daemon">{`sudo nano /etc/default/ddclient`}</CodeBlock>,
            <CodeBlock key="ddclient-daemon-config">{`run_daemon="true"
daemon_interval="300"`}</CodeBlock>,
            'Test, restart, and enable the service:',
            <CodeBlock key="ddclient-test">{`sudo ddclient -daemon=0 -debug -verbose -noquiet
sudo systemctl restart ddclient
sudo systemctl status ddclient
sudo systemctl enable ddclient`}</CodeBlock>,
            'Verify the hostname resolves to the expected public IP:',
            <CodeBlock key="ddclient-lookup">{`nslookup your-subdomain.example.com`}</CodeBlock>,
        ],
    },
    {
        title: '4. Configure router port forwarding',
        paragraphs: [
            'Expose the WireGuard port so the VPN is reachable from the internet.',
            'In your router settings, create a port forwarding rule with these values:',
        ],
        bullets: [
            'Device: your Raspberry Pi (static LAN IP).',
            'Protocol: UDP.',
            'External port: your chosen WireGuard port.',
            'Internal port: the same WireGuard port.',
            'Internal IP: the Raspberry Pi static IP.',
        ],
    },
    {
        title: '5. Add clients and connect',
        paragraphs: [
            'Create a client profile:',
            <CodeBlock key="pivpn-add">{`pivpn add`}</CodeBlock>,
            'Generate a QR code for mobile clients:',
            <CodeBlock key="pivpn-qr">{`pivpn -qr`}</CodeBlock>,
            'Desktop clients can import the configuration file from /etc/wireguard/.',
        ],
    },
    {
        title: '6. Troubleshooting and IPv6-only networks',
        paragraphs: [
            'Use the built-in diagnostics to inspect server status and connected clients:',
            <CodeBlock key="pivpn-debug">{`pivpn -d
pivpn -c`}</CodeBlock>,
            'If your ISP provides IPv6 only, make sure your DDNS provider supports AAAA records and update ddclient to check IPv6:',
            <CodeBlock key="ddclient-ipv6">{`use=web, web=checkip6.spdyn.de/`}</CodeBlock>,
            'Add an IPv6 address to the WireGuard interface and restart:',
            <CodeBlock key="wireguard-ipv6">{`sudo nano /etc/wireguard/wg0.conf`}</CodeBlock>,
            <CodeBlock key="wireguard-ipv6-config">{`Address = 10.8.0.2/24, fd11:5ee:bad:c0de::2/64`}</CodeBlock>,
            <CodeBlock key="wireguard-restart">{`sudo systemctl restart wg-quick@wg0`}</CodeBlock>,
        ],
    },
    {
        title: 'Outcome',
        paragraphs: [
            'You now have a secure WireGuard VPN running on your Raspberry Pi with stable local addressing and remote access via DDNS.',
        ],
    },
];

const pivpnQuickFacts = [
    { label: 'Hardware', value: 'Raspberry Pi' },
    { label: 'VPN stack', value: 'PiVPN with WireGuard' },
    { label: 'Network', value: 'Static LAN IP, DDNS, port forwarding' },
    { label: 'Clients', value: 'WireGuard on mobile and desktop' },
];

const nextcloudTitle = 'Nextcloud on Raspberry Pi 3 with an external SSD';
const nextcloudIntro =
    'Step-by-step setup for running Nextcloud on a Raspberry Pi 3 using Docker and storing files on an external SSD.';

const nextcloudSections = [
    {
        title: 'Prerequisites',
        paragraphs: [
            'Confirm you have the required hardware and a fresh Debian-based install.',
        ],
        bullets: [
            'External SSD for cloud storage.',
            'Raspberry Pi 3 with a Debian-based operating system.',
        ],
    },
    {
        title: '1. Prepare and format the SSD',
        paragraphs: [
            'List attached disks and confirm the SSD device name:',
            <CodeBlock key="nextcloud-lsblk">{`lsblk`}</CodeBlock>,
            'Remove existing partitions on the SSD. Double-check the device to avoid data loss:',
            <CodeBlock key="nextcloud-parted-rm">{`sudo parted /dev/sda "rm 1"`}</CodeBlock>,
            'Create a GPT partition table:',
            <CodeBlock key="nextcloud-parted-gpt">{`sudo parted /dev/sda "mklabel gpt"`}</CodeBlock>,
            'Create a single ext4 partition across the full disk:',
            <CodeBlock key="nextcloud-parted-mkpart">{`sudo parted /dev/sda "mkpart primary ext4 0% 100%"`}</CodeBlock>,
            'Format the new partition:',
            <CodeBlock key="nextcloud-mkfs">{`sudo mkfs.ext4 /dev/sda1`}</CodeBlock>,
        ],
    },
    {
        title: '2. Mount the SSD permanently',
        paragraphs: [
            'Create a mount point and mount the drive:',
            <CodeBlock key="nextcloud-mkdir-mount">{`sudo mkdir -p /mnt/ssd
sudo mount /dev/sda1 /mnt/ssd`}</CodeBlock>,
            'Verify the mount:',
            <CodeBlock key="nextcloud-df-h">{`df -h`}</CodeBlock>,
            'Fetch the PARTUUID and add it to /etc/fstab:',
            <CodeBlock key="nextcloud-blkid">{`blkid`}</CodeBlock>,
            <CodeBlock key="nextcloud-fstab-edit">{`sudo nano /etc/fstab`}</CodeBlock>,
            <CodeBlock key="nextcloud-fstab-entry">{`PARTUUID=YOUR_PARTUUID /mnt/ssd ext4 defaults 0 1`}</CodeBlock>,
            'Test the configuration and confirm the filesystem type:',
            <CodeBlock key="nextcloud-mount-test">{`sudo mount -a
df -Th`}</CodeBlock>,
        ],
    },
    {
        title: '3. Install Docker and create directories',
        paragraphs: [
            'Install Docker and Docker Compose:',
            <CodeBlock key="nextcloud-docker-install">{`sudo apt install docker.io docker-compose -y`}</CodeBlock>,
            'Create the Nextcloud directory structure:',
            <CodeBlock key="nextcloud-dirs">{`sudo mkdir -p /root/nextcloud/{nextcloud,apps,config,mariadb}`}</CodeBlock>,
            'Create a data directory on the SSD and set permissions:',
            <CodeBlock key="nextcloud-data-dir">{`sudo mkdir -p /mnt/ssd/nextcloud-data
sudo chown -R www-data:www-data /mnt/ssd/nextcloud-data`}</CodeBlock>,
        ],
    },
    {
        title: '4. Create docker-compose.yml',
        paragraphs: [
            'From /root/nextcloud, create and edit docker-compose.yml:',
            <CodeBlock key="nextcloud-compose-edit">{`cd /root/nextcloud
nano docker-compose.yml`}</CodeBlock>,
            'Use the following configuration (replace placeholders with your own values):',
            <CodeBlock key="nextcloud-compose-file">{`version: '2'

services:
  mariadb:
    image: mariadb
    restart: always
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW --innodb-file-per-table=1 --skip-innodb-read-only-compressed
    ports:
      - 9022:3306
    volumes:
      - /root/nextcloud/mariadb:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=YOUR_ROOT_PASSWORD
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=YOUR_DB_PASSWORD

  nextcloud:
    image: nextcloud
    restart: always
    ports:
      - 8080:80
    links:
      - mariadb:mysql
    volumes:
      - /root/nextcloud/nextcloud:/var/www/html
      - /root/nextcloud/apps:/var/www/html/custom_apps
      - /root/nextcloud/config:/var/www/html/config
      - /mnt/ssd/nextcloud-data:/var/www/html/data
    environment:
      - MYSQL_PASSWORD=YOUR_DB_PASSWORD
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_HOST=mariadb`}</CodeBlock>,
        ],
    },
    {
        title: '5. Start Nextcloud and finish setup',
        paragraphs: [
            'Start the containers:',
            <CodeBlock key="nextcloud-compose-up">{`sudo docker-compose up -d`}</CodeBlock>,
            'Open Nextcloud in your browser and complete the admin setup:',
            <CodeBlock key="nextcloud-url">{`http://YOUR_RASPBERRY_PI_IP:8080`}</CodeBlock>,
        ],
    },
    {
        title: 'Outcome',
        paragraphs: [
            'Nextcloud is running on your Raspberry Pi with data stored on the external SSD.',
        ],
    },
];

const nextcloudQuickFacts = [
    { label: 'Hardware', value: 'Raspberry Pi 3 + external SSD' },
    { label: 'Stack', value: 'Docker, Docker Compose, MariaDB' },
    { label: 'Storage', value: 'ext4 on /mnt/ssd' },
    { label: 'Access', value: 'http://YOUR_RASPBERRY_PI_IP:8080' },
];

const guides = [
    {
        id: 'pivpn',
        title: pivpnTitle,
        description: 'Secure remote access with WireGuard, static IPs, dynamic DNS, and router forwarding.',
    },
    {
        id: 'nextcloud',
        title: nextcloudTitle,
        description: 'Self-hosted cloud storage using Docker and an external SSD for Nextcloud data.',
    },
];

const blogCta = [
    { text: 'Contact me', href: '/contact' },
    { text: 'See projects', href: '/projects' },
];

const Blog = () => {
    return (
        <div className="w-full space-y-12">
            <section className="relative overflow-hidden rounded-2xl border border-border bg-contrast p-8 md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-contrast via-contrast to-background opacity-80" />
                <div className="relative space-y-8">
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains">Blog</p>
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-4xl font-bold md:text-5xl">Infrastructure guides from my Raspberry Pi lab.</h1>
                            <p className="text-secondary leading-relaxed">
                                Practical walkthroughs focused on secure remote access, self-hosted storage, and reliable home infrastructure.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Choose a guide</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {guides.map((guide) => (
                                <Link
                                    key={guide.id}
                                    href={`#${guide.id}`}
                                    className="group rounded-xl border border-border bg-contrastDark p-6 transition-colors hover:border-primary"
                                >
                                    <div className="space-y-3">
                                        <div className="text-lg font-semibold text-text group-hover:text-primary">
                                            {guide.title}
                                        </div>
                                        <p className="text-sm text-secondary">{guide.description}</p>
                                        <span className="text-sm font-medium text-primary">Read guide -></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="pivpn" className="scroll-mt-24 md:scroll-mt-32">
                <BlogLayout
                    blogTitle={pivpnTitle}
                    intro={pivpnIntro}
                    sections={pivpnSections}
                    quickFacts={pivpnQuickFacts}
                    cta={blogCta}
                    eyebrow="Guide"
                />
            </section>
            <section id="nextcloud" className="scroll-mt-24 md:scroll-mt-32">
                <BlogLayout
                    blogTitle={nextcloudTitle}
                    intro={nextcloudIntro}
                    sections={nextcloudSections}
                    quickFacts={nextcloudQuickFacts}
                    cta={blogCta}
                    eyebrow="Guide"
                />
            </section>
        </div>
    );
};

export default Blog;
