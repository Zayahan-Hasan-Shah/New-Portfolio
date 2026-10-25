import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Maximize2,
  X,
  Code2,
} from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

// Project Images
import chromo1 from '../../assets/images/chromo app/1.png';
import chromo2 from '../../assets/images/chromo app/2.png';
import chromo3 from '../../assets/images/chromo app/3.png';

import mirror1 from '../../assets/images/mirror app/1.jpg';

import dailyDiary2 from '../../assets/images/daily daires/2.png';
import dailyDiary1 from '../../assets/images/daily daires/1.png';

import cicl1 from '../../assets/images/cicl app/1.png';
import cicl2 from '../../assets/images/cicl app/2.png';

import posCrm1 from '../../assets/images/pos with crm/1.jpg';
import posCrm10 from '../../assets/images/pos with crm/10.png';
import posCrm11 from '../../assets/images/pos with crm/11.png';
import posCrm5 from '../../assets/images/pos with crm/5.png';
import posCrm8 from '../../assets/images/pos with crm/8.png';

import knovi1 from '../../assets/images/knovi/1.png';
import knovi2 from '../../assets/images/knovi/2.png';

import communication1 from '../../assets/images/communication app/1.png';
import communication2 from '../../assets/images/communication app/2.png';

import lawyer1 from '../../assets/images/lawyer app/1.png';
import lawyer2 from '../../assets/images/lawyer app/2.png';

import studyHome from '../../assets/images/study app/Home.jpg';
import study1 from '../../assets/images/study app/1.jpg';

import management1 from '../../assets/images/management app/1.png';
import management2 from '../../assets/images/management app/2.png';

const CRM_AI_IMAGE =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80';

type ProjectCategory = 'All' | 'Flutter & Mobile' | 'Full-Stack & Web' | 'Enterprise & Systems';

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: 'Flutter & Mobile' | 'Full-Stack & Web' | 'Enterprise & Systems';
  badge?: string;
  tags: string[];
  desc: string;
  keyFeatures: string[];
  techHighlights: string[];
  stats: { label: string; value: string }[];
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string[];
    impact: string;
  };
  images: string[];
};

const PROJECTS: Project[] = [
  {
    id: 'chromo-ai',
    title: 'Chromo — AI Color Analysis',
    subtitle: 'AI-Driven Seasonal Color Analysis & AR Virtual Try-On Mobile SaaS',
    category: 'Flutter & Mobile',
    badge: 'AI & Computer Vision',
    tags: ['Flutter', 'Computer Vision AI', '12-Season Engine', 'AR Virtual Try-On', 'Dart', 'Riverpod', 'Clean Architecture'],
    desc:
      'Chromo is an intelligent mobile fashion and personal styling application built with Flutter. It utilizes computer vision and color science to determine a user’s exact 12-season personal color palette (Light Spring, Warm Autumn, Clear Winter, Soft Summer, etc.) through selfie analysis, followed by photorealistic AR virtual try-on of clothing, makeup shades, and hair colors to eliminate online shopping uncertainty.',
    keyFeatures: [
      '12-Season AI Color Typing Engine assessing skin undertone, contrast ratios, sclera, eye colors, and natural hair pigments.',
      'Photorealistic Virtual Try-On allowing users to realistically visualize garments, textures, and catalog fashion items on their own body.',
      'Interactive 40+ Color Palette Swatches with exact HEX/RGB codes, categorized into statement, neutral, accent, and colors-to-avoid matrices.',
      'AR Beauty & Hair Makeover Suite featuring foundation/lipstick shade matching and real-time hair shade simulations (balayage, honey nectar, espresso noir).',
      'Smart Capsule Wardrobe & Outfit Harmony scoring uploaded wardrobe items against the user’s seasonal profile.',
    ],
    techHighlights: [
      'Designed with Flutter following Clean Architecture, modular feature separation, and Riverpod for reactive state management.',
      'Custom camera validation pipeline detecting ambient lighting, face tilt angles, and color cast prior to AI inference.',
      'High-performance custom canvas rendering for color swatches with micro-interactions and zero UI jank.',
    ],
    stats: [
      { label: 'Color Typing', value: '12 Seasons' },
      { label: 'Try-On Precision', value: 'Photorealistic' },
      { label: 'Architecture', value: 'Clean + Riverpod' },
      { label: 'Palette Swatches', value: '40+ Tones' },
    ],
    caseStudy: {
      problem:
        'Online apparel and cosmetics shoppers frequently struggle with buyer uncertainty, resulting in excessive return rates (up to 30%) because colors and garments that look great on models often clash with the buyer’s unique skin undertone and complexion.',
      solution:
        'Engineered Chromo as an end-to-end mobile personal stylist. The app guides the user through calibrated lighting selfie capture, runs high-precision color analysis algorithms to classify their seasonal quadrant, and renders real garments and makeup shades via an AR virtual try-on pipeline.',
      architecture: [
        'Client: Flutter 3.x with Riverpod, custom shaders, and CameraX integration.',
        'Vision Engine: Face landmark detection, skin undertone clustering (warm/cool/olive/neutral), and contrast normalization.',
        'AR Pipeline: Canvas-based garment blending, boundary-aware texture mapping, and real-time color overlay filters.',
        'Data Layer: Encrypted local caching for seasonal profiles, offline color swatch lookups, and cloud sync.',
      ],
      impact:
        'Delivered a frictionless styling experience that elevates confidence, helps users build personalized capsule wardrobes, and provides instant color harmonization.',
    },
    images: [chromo1, chromo2, chromo3],
  },
  {
    id: 'mirror-app',
    title: 'Mirror App — Remote MDM',
    subtitle: 'Remote Device Management (MDM) & Real-Time Screen Mirroring SaaS Platform',
    category: 'Flutter & Mobile',
    badge: 'Enterprise SaaS',
    tags: ['Flutter', 'Kotlin Android Native', 'MediaProjection', 'Node.js', 'Express 5', 'WebSockets', 'MongoDB'],
    desc:
      'A production-grade, enterprise-inspired Remote Mobile Device Management (MDM) and low-latency screen mirroring SaaS platform. Built with a dual-role architecture: an admin Controller (Phone A) that pairs devices via time-limited 6-digit cryptographic PINs, and a background Managed Device agent (Phone B) utilizing low-level native Android Kotlin services for screen capture, hardware telemetry, and notification interception.',
    keyFeatures: [
      'Low-Latency Screen Streaming Pipeline delivering ~11 FPS 480p compressed frames over binary WebSockets with sub-second delay.',
      'Demand-Driven Power & Bandwidth Management that broadcasts PAUSE_STREAM control signals when zero viewers are active, slashing battery & cellular data consumption by over 70%.',
      'Deep Hardware & System Telemetry monitoring battery temperature/charge, Wi-Fi SSID/BSSID, SIM carrier MNC/MCC, storage breakdown, and installed user/system apps.',
      'Intercepted Social & System Notification Hub utilizing Android NotificationListenerService to capture messages across WhatsApp, Instagram, Telegram, and SMS into a thread-safe circular memory queue.',
      'Native MediaStore Photo Gallery Sync extracting low-bandwidth thumbnails and providing memory-safe 1080p preview downsampling via ContentResolver.',
      'Zero-Touch Enterprise Provisioning Automation (setup_phone_b.bat) granting PROJECT_MEDIA, notification listeners, and deep runtime permissions silently via ADB.',
    ],
    techHighlights: [
      'Low-level Android Kotlin services solving GPU row-padding discrepancies (rowStride - pixelStride * width) across diverse mobile chipsets.',
      'High-throughput Node.js WebSocket relay server handling dynamic room multiplexing and direct binary frame broadcasting without base64 decoding overhead.',
      'Dual-role security model featuring JWT authentication, 6-digit cryptographic pairing codes with 10-minute TTL, and encrypted storage.',
    ],
    stats: [
      { label: 'Video Relay', value: '~11 FPS 480p' },
      { label: 'Bandwidth Saved', value: '70%+' },
      { label: 'Pairing Security', value: '6-Digit TTL' },
      { label: 'Native Services', value: 'Android Kotlin' },
    ],
    caseStudy: {
      problem:
        'Remote technical support, corporate device administration, and fleet auditing frequently require IT admins to inspect mobile screens, diagnose hardware issues, and audit system notifications without tethering physical cables or compromising device battery life.',
      solution:
        'Architected an end-to-end full-stack MDM and screen-mirroring platform. Phone B runs an un-killable Android Foreground Service that grabs frames via MediaProjection and streams raw bytes over WebSockets to a Node.js relay, where Phone A renders live feeds and telemetry on a Flutter dashboard.',
      architecture: [
        'Phone B (Managed Device): Android Kotlin ScreenCaptureService, DeviceNotificationListener, and MethodChannel/EventChannel bridges to Flutter.',
        'Relay Server: Node.js with Express 5 and WebSockets (ws), managing active viewer rooms, heartbeat telemetry ingestion, and stream control signaling.',
        'Phone A (Controller Dashboard): Flutter 3 client rendering real-time byte streams on CustomPaint canvases, querying telemetry REST endpoints, and managing paired devices.',
        'Database: MongoDB with Mongoose for device registries, heartbeat logs, and paginated gallery metadata.',
      ],
      impact:
        'Achieved fluid sub-second live screen mirroring with zero overheating issues, robust network resilience, and seamless remote diagnostics.',
    },
    images: [mirror1],
  },
  {
    id: 'daily-diary',
    title: 'Daily Diary',
    subtitle: 'Cross-Platform Mood Analytics, Audio Memos & Cloud Journaling App',
    category: 'Flutter & Mobile',
    badge: 'Mobile App',
    tags: ['Flutter', 'Firebase', 'Cloud Firestore', 'Audio Processing', 'Biometrics', 'BLoC'],
    desc:
      'A cross-platform personal journaling and emotional well-being application built with Flutter and Firebase. It empowers users to document their daily journeys through rich-text markdown, voice audio memos with live waveform visualization, video diaries, and mood tracking, supported by 100% offline-first local synchronization and hardware biometric encryption.',
    keyFeatures: [
      'Multi-Modal Journal Entries supporting rich text, high-fidelity voice notes with live sound waves, video clips, and mood sliders.',
      'Offline-First Local Synchronization utilizing local storage that seamlessly pushes updates to Firebase Cloud Firestore upon reconnecting.',
      'Emotional Well-Being Analytics generating interactive weekly and monthly charts correlating habits with mood fluctuations.',
      'Hardware Biometric Security Vault protecting intimate personal thoughts with fingerprint and Face ID authentication.',
      'Full-Text Search & Tag Taxonomy enabling instant lookups across thousands of historical memories, tags, and milestones.',
    ],
    techHighlights: [
      'Implemented predictable BLoC pattern for state management and decoupled business logic.',
      'Optimized audio streaming and recording using native platform audio encoders with minimal file footprints.',
      'Fluid 60 FPS transitions and dynamic theme palette adjusting between daylight and dark modes.',
    ],
    stats: [
      { label: 'Sync Mode', value: 'Offline-First' },
      { label: 'Security', value: 'Biometric Enclave' },
      { label: 'Media Input', value: 'Text, Voice, Video' },
      { label: 'State Mgmt', value: 'BLoC Pattern' },
    ],
    caseStudy: {
      problem:
        'Standard note-taking apps lack emotional intelligence, provide no structured tracking for mental health, and often fail or lose unsaved edits when internet connectivity drops.',
      solution:
        'Built Daily Diary with an offline-first architecture. Entries are written and validated locally in millisecond time, then synced reactively to Firebase when network conditions allow, keeping user data private with hardware biometrics.',
      architecture: [
        'Client: Flutter with BLoC state management and custom audio waveform visualizer.',
        'Backend: Firebase Firestore, Firebase Storage for audio/video assets, and Firebase Auth.',
        'Persistence: Local SQLite/Hive database with automatic background conflict resolution.',
      ],
      impact:
        'Delivered a therapeutic, reliable journaling tool that fosters consistent personal reflection without fear of privacy leaks or lost data.',
    },
    images: [dailyDiary2, dailyDiary1],
  },
  {
    id: 'cicl-app',
    title: 'CICL Insurance App',
    subtitle: 'High-Security Enterprise Insurance Claim Tracking & Biometric Portal',
    category: 'Flutter & Mobile',
    badge: 'Fintech & Enterprise',
    tags: ['Flutter', 'Biometrics', 'Real-Time Tracking', 'REST APIs', 'Push Notifications', 'Security'],
    desc:
      'A mission-critical enterprise mobile application built for an insurance organization, streamlining policy management, claims submission, biometric authentication, and multi-stage verification workflows. Designed to eliminate paper overhead and cut claim resolution turnaround time by over 60%.',
    keyFeatures: [
      'Biometric Hardware Authentication integrating fingerprint and face recognition directly into enterprise identity gateways.',
      'Real-Time Claim Status Pipeline displaying live milestone progression (Assessment, Document Verification, Approvals, Payout).',
      'In-App Document Scanner with automatic perspective correction, image compression, and secure PDF compilation for incident reporting.',
      'Automated Webhook Push Notifications keeping policyholders informed at every stage of adjuster reviews and claim disbursements.',
      'Tamper-Proof Audit Logging with screen capture prevention and active session termination for sensitive financial protection.',
    ],
    techHighlights: [
      'Hardened security layer with certificate pinning, root/jailbreak detection, and secure key storage.',
      'Offline claim draft creation with background sync once reconnected.',
      'Clean separation of business logic through Riverpod state management.',
    ],
    stats: [
      { label: 'Turnaround', value: '60% Faster' },
      { label: 'Auth Method', value: 'Biometric Handshake' },
      { label: 'Tracking', value: 'Milestone Real-Time' },
      { label: 'Security', value: 'Cert Pinning' },
    ],
    caseStudy: {
      problem:
        'Traditional insurance claims required policyholders to submit physical paperwork, leading to multi-week review delays, lost documentation, and high administrative support costs.',
      solution:
        'Engineered the CICL Mobile App to digitize the entire policyholder lifecycle: biometric login, guided incident photo uploads with OCR, real-time claim status tracking, and instant alerts upon payout authorization.',
      architecture: [
        'Mobile Client: Flutter cross-platform app utilizing native platform channels for biometrics.',
        'Enterprise Gateway: Secured RESTful APIs with certificate pinning and token revocation.',
        'Push Delivery: High-reliability push notification pipeline triggered on claim status transitions.',
      ],
      impact:
        'Accelerated claim review speed by 60%, drastically lowered customer support call volumes, and provided total transparency to policyholders.',
    },
    images: [cicl1, cicl2],
  },
  {
    id: 'pos-with-crm',
    title: 'POS with CRM System',
    subtitle: 'High-Throughput Retail Automation, Multi-Warehouse Inventory & Customer Ledger',
    category: 'Flutter & Mobile',
    badge: 'FYP Capstone / SaaS',
    tags: ['Flutter Desktop/Mobile', 'FastAPI', 'Python', 'PostgreSQL', 'JWT', 'Inventory Management'],
    desc:
      'A comprehensive, production-ready Point of Sale (POS) and Customer Relationship Management (CRM) ecosystem engineered as a flagship capstone project. Designed for modern multi-branch retail businesses, integrating lightning-fast checkout billing, real-time inventory ledger tracking, automated supplier re-orders, and data-driven customer loyalty analytics.',
    keyFeatures: [
      'Rapid POS Checkout Engine supporting barcode scanning, split payments (Cash, Card, QR), digital receipts, and sub-second invoice printing.',
      'Real-Time Multi-Branch Inventory Ledger with automatic stock adjustments, low-inventory alerts, and supplier purchase order workflows.',
      'Customer Credit & Debt Bookkeeping (Khata) recording customer balances, credit terms, and automated repayment SMS reminders.',
      'Dynamic Financial & Sales Analytics displaying gross margins, COGS (Cost of Goods Sold), daily sales velocity, and peak store traffic hours.',
      'Granular Role-Based Access Control (RBAC) ensuring Cashiers, Store Managers, and Admins operate within strict authorization limits.',
    ],
    techHighlights: [
      'Asynchronous FastAPI (Python) backend delivering high throughput and low-latency API response times (<30ms).',
      'PostgreSQL database with ACID compliance, indexed foreign keys, and atomic transaction handling for financial ledger integrity.',
      'Cross-platform Flutter desktop and tablet interface with responsive layout that adapts seamlessly from handhelds to widescreen cash registers.',
    ],
    stats: [
      { label: 'API Latency', value: '<30ms FastAPI' },
      { label: 'Transactions', value: '100% ACID' },
      { label: 'Platform', value: 'Desktop & Mobile' },
      { label: 'Ledger Type', value: 'Real-Time Khata' },
    ],
    caseStudy: {
      problem:
        'Small and medium retail businesses frequently struggle with disjointed legacy POS terminals that do not integrate with inventory databases or track customer credit (Khata), resulting in inventory shrinkage and inaccurate accounting.',
      solution:
        'Built an integrated POS and CRM system with a modern Flutter user interface and an asynchronous Python FastAPI backend. The system connects checkout registers to a centralized PostgreSQL database with atomic locking.',
      architecture: [
        'Frontend: Flutter for Windows Desktop and Android tablets, utilizing responsive grid layouts.',
        'Backend: Python FastAPI with Pydantic schema validation and SQLAlchemy ORM.',
        'Database: PostgreSQL with composite indexing and transaction isolation levels.',
      ],
      impact:
        'Eliminated checkout bottlenecks, provided store owners real-time visibility into profits and stock levels, and automated customer credit management.',
    },
    images: [posCrm1, posCrm10, posCrm11, posCrm5, posCrm8],
  },
  {
    id: 'knovi',
    title: 'Knovi — Knowledge Management',
    subtitle: 'Institutional Knowledge Base, Document Management & Collaborative Learning SaaS',
    category: 'Full-Stack & Web',
    badge: 'EdTech Web SaaS',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'RBAC'],
    desc:
      'Knovi is a comprehensive knowledge management and collaborative learning platform engineered to revolutionize institutional knowledge sharing. Built with Next.js and PostgreSQL, it bridges the gap between educational administrators, faculty, and students through categorized digital repositories, interactive coursework, and granular access governance.',
    keyFeatures: [
      'Institutional Document Repository with hierarchical file trees, multi-format file indexing, and version control.',
      'Three Tailored Role Portals (Student, Teacher, Admin) enabling teachers to publish syllabus modules and students to track learning.',
      'Collaborative Study Spaces featuring contextual commenting on learning materials, peer discussion boards, and shared study folders.',
      'Comprehensive Progress Analytics monitoring course completion rates, quiz evaluations, and engagement metrics.',
      'Instant Search Engine performing lightning-fast keyword lookups across thousands of indexed documents and syllabus notes.',
    ],
    techHighlights: [
      'Server-Side Rendering (SSR) and React Server Components in Next.js for near-instant page loads and top-tier SEO performance.',
      'PostgreSQL relational schema modeled using Prisma ORM with connection pooling for optimal database throughput.',
      'Modern, accessible user interface styled with Tailwind CSS, supporting dark/light theme switching and responsive layouts.',
    ],
    stats: [
      { label: 'Web Engine', value: 'Next.js 14 SSR' },
      { label: 'Database', value: 'PostgreSQL + Prisma' },
      { label: 'Access Control', value: 'Multi-Role RBAC' },
      { label: 'Search Speed', value: 'Instant Indexing' },
    ],
    caseStudy: {
      problem:
        'Schools and colleges often struggle with fragmented file sharing across chat groups and cloud drives, leading to lost study materials, zero progress accountability, and administrative chaos.',
      solution:
        'Architected Knovi as a unified academic knowledge hub where curricula, reading materials, assignments, and discussions exist in a single governed, searchable portal.',
      architecture: [
        'Application: Next.js with React 19, TypeScript, and Server Actions.',
        'Database: PostgreSQL hosted with Prisma ORM migrations.',
        'Authentication: Role-based session cookies with secure HTTP-only token management.',
      ],
      impact:
        'Streamlined academic workflow for students and faculty, dramatically reducing the friction of finding and sharing study materials.',
    },
    images: [knovi1, knovi2],
  },
  {
    id: 'communication-app',
    title: 'Real-Time Communication App',
    subtitle: 'High-Concurrency Real-Time Messaging & Bi-Directional WebSocket Network',
    category: 'Flutter & Mobile',
    badge: 'Real-Time Networking',
    tags: ['Flutter', 'Node.js', 'Socket.io', 'Express', 'MongoDB', 'WebSockets'],
    desc:
      'A low-latency, real-time messaging application engineered with Flutter on the mobile client and an asynchronous Node.js / Socket.io relay on the backend. Designed to deliver instantaneous bi-directional communication, read receipts, and media asset streaming with sub-50ms latency.',
    keyFeatures: [
      'Bi-Directional WebSocket Streaming ensuring instantaneous message packet exchange with heartbeat ping intervals and auto-reconnection.',
      'Rich Chat Dynamics including real-time typing indicators, online/offline presence tracking, and delivered/read checkmarks.',
      'Media Asset Transmission supporting in-chat voice memos, compressed photo attachments, and document uploads.',
      'Multiplexed Chat Channels supporting private 1-on-1 encrypted chats as well as multi-participant broadcast rooms.',
      'FCM Push Fallback automatically dispatching push notifications when sockets disconnect or devices sleep.',
    ],
    techHighlights: [
      'Clustered Socket.io server architecture capable of scaling across room instances with minimal memory footprint.',
      'Local caching using Hive for instant offline chat history retrieval and optimistic message UI rendering.',
      'Clean architecture isolating transport socket listeners from view controllers.',
    ],
    stats: [
      { label: 'Packet Latency', value: '<50ms WebSocket' },
      { label: 'State Cache', value: 'Hive Offline' },
      { label: 'Push Handoff', value: 'Firebase FCM' },
      { label: 'Protocols', value: 'Socket.io / ws' },
    ],
    caseStudy: {
      problem:
        'Building a responsive messaging app requires handling variable mobile network stability, message sequencing, unread indicators, and instant notification handoffs without draining mobile batteries.',
      solution:
        'Implemented a bi-directional Socket.io architecture with client-side optimistic UI updates. Messages appear immediately on screen while background socket acks confirm delivery, falling back to Firebase Cloud Messaging when devices disconnect.',
      architecture: [
        'Mobile Client: Flutter with Hive local storage and Socket.io client library.',
        'Backend Relay: Node.js, Express, and Socket.io with room multiplexing.',
        'Data Store: MongoDB for persistent chat history and user contact lists.',
      ],
      impact:
        'Delivered a modern messaging experience on par with mainstream chat apps, with sub-50ms message latency.',
    },
    images: [communication1, communication2],
  },
  {
    id: 'lawyer-app',
    title: 'Lawyer App — Legal Practice Hub',
    subtitle: 'Legal Case Management, Court Docket Tracking & Encrypted Video Consultations',
    category: 'Flutter & Mobile',
    badge: 'LegalTech Mobile',
    tags: ['Flutter', 'C# .NET', 'MSSQL', 'WebRTC Video', 'Document Vault', 'Security'],
    desc:
      'A mission-critical LegalTech mobile application designed for legal firms, advocates, and clients. It modernizes legal practice by providing automated court hearing schedules, case docket history, confidential encrypted client communications (real-time chat and video conferencing), and a secure legal document repository.',
    keyFeatures: [
      'Litigation & Case Docket Tracker managing court case numbers, courtroom assignments, judicial orders, and upcoming hearing dates.',
      'Secure Video Consultation integrated with WebRTC to allow confidential attorney-client meetings directly within the app.',
      'Encrypted Legal Document Vault providing tamper-proof storage for case affidavits, evidence exhibits, and court filings.',
      'Client Onboarding & Intake workflows streamlining legal consultation bookings, intake questionnaires, and retainers.',
      'Automated Hearing Reminders delivering multi-channel SMS and push notification alerts for impending court appearances.',
    ],
    techHighlights: [
      'Built with Flutter frontend connected to enterprise C# .NET REST services and Microsoft SQL Server (MSSQL).',
      'Compliant with attorney-client confidentiality guidelines via encrypted transmission and strict session tokens.',
      'Designed with intuitive navigation for senior legal professionals.',
    ],
    stats: [
      { label: 'Consultations', value: 'Encrypted Video' },
      { label: 'Backend Stack', value: 'C# .NET & MSSQL' },
      { label: 'Case Tracker', value: 'Court Dockets' },
      { label: 'Compliance', value: 'Privilege Ready' },
    ],
    caseStudy: {
      problem:
        'Law firms lose countless billable hours manually keeping track of physical case files, court schedules across multiple benches, and unscheduled client phone calls.',
      solution:
        'Created a centralized legal management application that automates hearing calendars, archives court rulings, and enables structured video and chat consultations.',
      architecture: [
        'Frontend: Flutter mobile client with calendar synchronization.',
        'Backend: C# .NET Web API with Entity Framework Core.',
        'Database: Microsoft SQL Server (MSSQL) with encrypted column storage for sensitive case notes.',
      ],
      impact:
        'Streamlined courtroom preparation for attorneys, prevented missed filing deadlines, and made professional legal advice easily accessible to clients.',
    },
    images: [lawyer1, lawyer2],
  },
  {
    id: 'study-management',
    title: 'Study Management App',
    subtitle: 'Native Android Academic Planner, Pomodoro Focus & Syllabus Tracker',
    category: 'Flutter & Mobile',
    badge: 'Native Android',
    tags: ['Kotlin', 'Android SDK', 'Jetpack Room', 'Coroutines', 'Flow', 'Material Design 3'],
    desc:
      'A native Android productivity and academic scheduling application developed in Kotlin. Built to assist students in organizing study curriculums, tracking syllabus milestone completions, setting revision alarms, and visualizing study-hour analytics.',
    keyFeatures: [
      'Study Schedule & Exam Timetable with structured revision agendas, priority tags, and exam countdown timers.',
      'Pomodoro Focus Timer featuring customizable focus sessions, break intervals, and background alarm notifications.',
      'Task & Homework Tracker with deadlines, subject tags, and completion check-offs.',
      'Productivity Analytics displaying daily/weekly study hours, subject allocation breakdowns, and milestone completion velocity.',
      '100% Offline Persistence powered by Android Jetpack Room DB for instant, zero-latency interactions.',
    ],
    techHighlights: [
      'Pure native Kotlin implementation leveraging Kotlin Coroutines and StateFlow for non-blocking asynchronous database operations.',
      'Follows Google Material Design 3 guidelines with fluid animations and responsive native widgets.',
    ],
    stats: [
      { label: 'Native Stack', value: 'Kotlin & Android SDK' },
      { label: 'Database', value: 'Jetpack Room' },
      { label: 'Concurrency', value: 'Coroutines + Flow' },
      { label: 'UI Standards', value: 'Material Design 3' },
    ],
    caseStudy: {
      problem:
        'Students frequently juggle multiple course subjects without structured planning, leading to exam cramming, fatigue, and poor time management.',
      solution:
        'Designed a distraction-free native Android productivity app combining the proven Pomodoro technique with syllabus tracking and visual progress charts.',
      architecture: [
        'Language: Kotlin targeting Android API 34+.',
        'Architecture: MVVM with ViewModel, StateFlow, and Room DAO.',
        'Storage: SQLite via Jetpack Room with reactive observers.',
      ],
      impact:
        'Equipped students with a lightweight, battery-efficient study companion that boosts daily study discipline and exam readiness.',
    },
    images: [studyHome, study1],
  },
  {
    id: 'management-system',
    title: 'Enterprise Management System',
    subtitle: 'High-Throughput Business Administration, Employee Portals & Operations Hub',
    category: 'Enterprise & Systems',
    badge: 'Enterprise Web',
    tags: ['React', 'TypeScript', 'C# .NET', 'MSSQL', 'REST API', 'Admin Dashboard'],
    desc:
      'A robust web-based enterprise management system built using React on the frontend and C# .NET on the backend with MSSQL. Focuses on clarity, raw speed, and maintainable layered architecture for managing company-wide departments, employees, project workflows, and asset allocations.',
    keyFeatures: [
      'Employee Directory & HR Management tracking department allocations, attendance logs, and staff profiles.',
      'Operational Approval Workflows handling leave requisitions, procurement expense authorizations, and equipment assignments.',
      'Dynamic Data Grids with multi-column sorting, search filters, and one-click data export to Excel and PDF.',
      'Comprehensive Audit Trail logging administrative actions for regulatory compliance and accountability.',
    ],
    techHighlights: [
      'Layered Clean Architecture on C# .NET with repository pattern and Entity Framework Core interfacing with MSSQL.',
      'React SPA with modular component hierarchy, custom hooks, and memoized renders for handling large corporate datasets without UI freeze.',
    ],
    stats: [
      { label: 'Frontend', value: 'React & TypeScript' },
      { label: 'Backend API', value: 'C# .NET Core' },
      { label: 'Data Store', value: 'Microsoft SQL Server' },
      { label: 'Export Tools', value: 'Excel & PDF Engine' },
    ],
    caseStudy: {
      problem:
        'Medium and large organizations often manage staff requests, assets, and approvals across unstructured email threads and paper forms, resulting in compliance bottlenecks and slow approvals.',
      solution:
        'Built a centralized administrative portal that unifies employee records, department structures, and approval workflows in an intuitive web dashboard.',
      architecture: [
        'Web Client: React with TypeScript, Tailwind CSS, and TanStack Table for high-performance grids.',
        'Server: C# ASP.NET Core Web API implementing Clean Architecture and Dependency Injection.',
        'Database: MSSQL with stored procedures and indexed query views for rapid analytics.',
      ],
      impact:
        'Accelerated organizational approval speeds, centralized employee records, and eliminated manual spreadsheet overhead.',
    },
    images: [management1, management2],
  },
  {
    id: 'crm-with-ai',
    title: 'AI-Powered Enterprise CRM',
    subtitle: 'Next-Gen Predictive CRM with Machine Learning Lead Scoring & Automated Workflows',
    category: 'Full-Stack & Web',
    badge: 'AI & Machine Learning',
    tags: ['React', 'Node.js', 'AI / ML', 'MongoDB', 'Predictive Analytics', 'Automation'],
    desc:
      'A next-generation web CRM platform combining traditional customer pipeline management with predictive artificial intelligence. It delivers automated lead qualification, churn risk scoring, real-time analytics, and automated communication sequencing for enterprise sales teams.',
    keyFeatures: [
      'Machine Learning Lead Scoring analyzing prospect interactions, email opens, and engagement frequency to score lead conversion likelihood.',
      'Interactive Sales Pipeline (Kanban) enabling drag-and-drop deal progression across discovery, proposal, negotiation, and closing stages.',
      'Automated Workflow Sequences dispatching smart follow-up emails, scheduling tasks, and updating deal fields automatically.',
      'Executive Analytics Dashboard displaying revenue forecasts, sales team quota attainment, and conversion funnels.',
    ],
    techHighlights: [
      'React dashboard built with responsive data visualizations, SVG charts, and optimistic UI transitions.',
      'Node.js microservices backend interfacing with MongoDB for elastic schema flexibility and lightning-fast document querying.',
    ],
    stats: [
      { label: 'AI Intelligence', value: 'Predictive Scoring' },
      { label: 'Pipeline View', value: 'Kanban Drag & Drop' },
      { label: 'Backend Engine', value: 'Node.js & MongoDB' },
      { label: 'Workflow', value: 'Automated Triggers' },
    ],
    caseStudy: {
      problem:
        'Sales representatives spend up to 40% of their time manually qualifying cold leads and logging follow-up tasks instead of engaging with high-intent prospects.',
      solution:
        'Created an AI-augmented CRM that continuously analyzes prospect activity, assigns predictive purchase intent scores, and triggers automated follow-up sequences.',
      architecture: [
        'Frontend: React SPA with interactive data visualization charts and drag-and-drop Kanban boards.',
        'API: Node.js and Express REST services orchestrating ML scoring webhooks and CRM workflows.',
        'Database: MongoDB with aggregation pipelines for fast analytical querying.',
      ],
      impact:
        'Boosted sales team efficiency by prioritizing high-value leads and automating routine administrative outreach.',
    },
    images: [CRM_AI_IMAGE],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Ensure current active project is valid for current category
  const activeIndex = useMemo(() => {
    const idx = filteredProjects.findIndex((p) => p.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [filteredProjects, activeId]);

  const active = filteredProjects[activeIndex] || PROJECTS[0];

  const handleSelectProject = useCallback((id: string) => {
    setActiveId(id);
    setActiveImageIndex(0);
    setOrientation('landscape');
  }, []);

  const onPrev = useCallback(() => {
    const nextIdx = (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    handleSelectProject(filteredProjects[nextIdx].id);
  }, [activeIndex, filteredProjects, handleSelectProject]);

  const onNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % filteredProjects.length;
    handleSelectProject(filteredProjects[nextIdx].id);
  }, [activeIndex, filteredProjects, handleSelectProject]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showCaseStudyModal && e.key === 'Escape') {
        setShowCaseStudyModal(false);
        return;
      }
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, showCaseStudyModal]);

  const currentImage = active.images[activeImageIndex] || active.images[0];

  return (
    <section id="portfolio" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Portfolio" title="Featured Projects" />
      </div>

      {/* Category Filter Tabs */}
      <div className="bx-animate-in-up mb-8 flex flex-wrap items-center gap-3">
        {(['All', 'Flutter & Mobile', 'Full-Stack & Web', 'Enterprise & Systems'] as ProjectCategory[]).map(
          (cat) => {
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstOfCat = cat === 'All' ? PROJECTS[0] : PROJECTS.find((p) => p.category === cat);
                  if (firstOfCat) handleSelectProject(firstOfCat.id);
                }}
                className={`rounded-full px-5 py-2.5 text-[1.4rem] font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-accent-gradient text-white shadow-glass-soft'
                    : 'border border-stroke-elements bg-base text-text-medium hover:border-stroke-controls hover:text-text-bright'
                }`}
              >
                {cat} <span className="opacity-75">({count})</span>
              </button>
            );
          },
        )}
      </div>



      {/* Main Project Card */}
      <Card className="bx-animate-in-up relative overflow-hidden p-[2.4rem] sm:p-[3.2rem] 2xl:p-[4.8rem]">
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke-elements pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-gradient px-4 py-1.5 text-[1.2rem] font-bold uppercase tracking-wider text-white shadow-sm">
              {active.category}
            </span>
            {active.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stroke-controls bg-base px-3.5 py-1.5 text-[1.2rem] font-bold text-text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                {active.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-[1.4rem] font-extrabold text-text-placeholder">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(filteredProjects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="mt-6">
          <h3 className="text-[2.6rem] sm:text-[3.4rem] font-extrabold leading-tight text-text-bright">
            {active.title}
          </h3>
          <p className="mt-2 text-[1.6rem] font-semibold text-text-secondary">
            {active.subtitle}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {active.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-stroke-elements bg-base px-3.5 py-1.5 text-[1.3rem] font-medium text-text-medium shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content & Media Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Details */}
          <div className="min-w-0 space-y-6">
            {/* Executive Summary */}
            <div className="rounded-bx-m border border-stroke-elements bg-base/50 p-5">
              <p className="text-[1.3rem] font-bold uppercase tracking-wider text-text-accent">
                Executive Overview
              </p>
              <p className="mt-2 text-[1.6rem] leading-relaxed text-text-muted">
                {active.desc}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <p className="flex items-center gap-2 text-[1.6rem] font-extrabold text-text-bright">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Key Features & Capabilities
              </p>
              <ul className="mt-3 space-y-2.5">
                {active.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-[1.45rem] leading-snug text-text-muted">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights */}
            <div className="rounded-bx-m border border-stroke-elements bg-base-tint/60 p-5">
              <p className="flex items-center gap-2 text-[1.5rem] font-extrabold text-text-bright">
                <Cpu className="h-5 w-5 text-secondary" />
                Technical Architecture & Engineering
              </p>
              <ul className="mt-3 space-y-2">
                {active.techHighlights.map((tech, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[1.4rem] leading-relaxed text-text-medium">
                    <Code2 className="mt-1 h-4 w-4 shrink-0 text-text-accent" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance & Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {active.stats.map((st, i) => (
                <div
                  key={i}
                  className="rounded-bx-s border border-stroke-elements bg-base/70 p-3.5 text-center shadow-2xs"
                >
                  <p className="text-[1.6rem] font-extrabold text-text-accent sm:text-[1.8rem]">
                    {st.value}
                  </p>
                  <p className="mt-1 text-[1.2rem] font-medium text-text-placeholder">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowCaseStudyModal(true)}
                className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3.5 text-[1.4rem] font-bold text-white shadow-glass-soft transition hover:scale-[1.02]"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Media Preview */}
          <div className="space-y-4">
            <div className="w-full overflow-hidden rounded-bx-l border border-stroke-elements bg-base-shade/15 shadow-inner">
              <div
                className={`relative flex w-full items-center justify-center p-3 sm:p-5 ${
                  orientation === 'portrait'
                    ? 'aspect-[9/16] sm:aspect-[4/5] max-h-[520px]'
                    : 'aspect-[16/10] sm:aspect-[4/3] max-h-[480px]'
                }`}
              >
                <img
                  key={`${active.id}-${activeImageIndex}`}
                  src={currentImage}
                  alt={`${active.title} preview`}
                  loading="lazy"
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    if (img.naturalHeight > img.naturalWidth * 1.1) {
                      setOrientation('portrait');
                    } else {
                      setOrientation('landscape');
                    }
                  }}
                  className="h-full w-full rounded-bx-m object-contain drop-shadow-md transition-all duration-300"
                />

                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={() => setShowCaseStudyModal(true)}
                  className="absolute right-4 top-4 rounded-full border border-stroke-controls bg-base/80 p-2 text-text-bright backdrop-blur-md transition hover:bg-base hover:scale-105"
                  title="Expand Case Study"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Multiple Images Selector */}
            {active.images.length > 1 && (
              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="text-[1.2rem] font-bold text-text-placeholder mr-1">
                  Screens ({active.images.length}):
                </span>
                {active.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-9 w-9 rounded-bx-s border text-[1.2rem] font-bold transition-all ${
                      activeImageIndex === idx
                        ? 'border-secondary bg-secondary text-white shadow-sm'
                        : 'border-stroke-elements bg-base text-text-muted hover:border-stroke-controls hover:text-text-bright'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-full border border-stroke-controls bg-base text-text-bright transition hover:bg-secondary/10 hover:border-secondary hover:scale-105"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-full border border-stroke-controls bg-base text-text-bright transition hover:bg-secondary/10 hover:border-secondary hover:scale-105"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar Indicator */}
        <div className="flex items-center gap-3 text-[1.4rem] font-semibold text-text-muted">
          <span>Project {activeIndex + 1} of {filteredProjects.length}</span>
          <div className="hidden sm:block h-2 w-36 overflow-hidden rounded-full bg-stroke-elements">
            <div
              className="h-full rounded-full bg-accent-gradient transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / filteredProjects.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Deep Technical Case Study Modal */}
      {showCaseStudyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md">
          <div
            className="relative max-h-[90vh] w-full max-w-[850px] overflow-y-auto rounded-bx-xl border border-stroke-elements bg-base p-6 sm:p-10 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowCaseStudyModal(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke-controls bg-base text-text-bright transition hover:bg-black/10 hover:scale-105"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-[1.3rem] font-bold uppercase tracking-wider text-text-accent">
                <span>{active.category}</span>
                <span>•</span>
                <span>Deep Technical Case Study</span>
              </div>
              <h3 id="case-study-title" className="mt-2 text-[2.8rem] sm:text-[3.2rem] font-extrabold text-text-bright">
                {active.title}
              </h3>
              <p className="mt-1 text-[1.6rem] font-medium text-text-muted">
                {active.subtitle}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 border-b border-stroke-elements pb-6">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-base-tint border border-stroke-elements px-3.5 py-1 text-[1.2rem] font-medium text-text-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Case Study Sections */}
            <div className="mt-6 space-y-6">
              {/* Problem */}
              <div className="rounded-bx-m border border-stroke-elements bg-base-tint/40 p-5">
                <p className="text-[1.5rem] font-bold text-text-bright">
                  The Problem & Challenge
                </p>
                <p className="mt-2 text-[1.5rem] leading-relaxed text-text-muted">
                  {active.caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-bx-m border border-stroke-elements bg-base-tint/40 p-5">
                <p className="text-[1.5rem] font-bold text-text-bright">
                  The Engineering Solution
                </p>
                <p className="mt-2 text-[1.5rem] leading-relaxed text-text-muted">
                  {active.caseStudy.solution}
                </p>
              </div>

              {/* Architectural Breakdown */}
              <div className="rounded-bx-m border border-stroke-elements bg-base-tint/40 p-5">
                <p className="text-[1.5rem] font-bold text-text-bright">
                  System Architecture & Stack Blueprint
                </p>
                <ul className="mt-3 space-y-2">
                  {active.caseStudy.architecture.map((arch, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[1.4rem] leading-relaxed text-text-muted">
                      <Layers className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="rounded-bx-m border border-secondary/30 bg-secondary/10 p-5">
                <p className="text-[1.5rem] font-bold text-text-bright">
                  Outcome, Performance & Business Impact
                </p>
                <p className="mt-2 text-[1.5rem] leading-relaxed text-text-medium">
                  {active.caseStudy.impact}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setShowCaseStudyModal(false)}
                className="rounded-full bg-accent-gradient px-7 py-3 text-[1.4rem] font-bold text-white shadow-sm transition hover:scale-105"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
