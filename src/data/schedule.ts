import type { ScheduleEvent, ScheduleSeason } from "@/types/schedule";

/**
 * USA Ultimate identifies the regular-season events below with its 2026
 * college season. See docs/SCHEDULE_MAINTENANCE.md before editing.
 */
export const scheduleSeason = {
  id: "2026",
  label: "2026 season",
  description: "Completed events and verified game results from WPI Whisper's spring 2026 competition.",
  publicationStatus: "published",
  startDate: "2026-03-21",
  endDate: "2026-04-12",
} as const satisfies ScheduleSeason;

/** Add only verified, publication-approved event and result records. */
export const scheduleEvents: readonly ScheduleEvent[] =
  [
    {
      id: "new-england-open-men",
      name: "New England Open (men)",
      type: "tournament",
      status: "completed",
      startDate: "2026-03-21",
      endDate: "2026-03-22",
      location: "Rehoboth, MA",
      externalUrl: "https://play.usaultimate.org/events/New-England-Open-men/",
      games: [
        { id: "clark", opponent: "Clark", status: "completed", date: "2026-03-21", whisperScore: 13, opponentScore: 5, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=ZJgvmcGm2QUDRCA2Mz5UPWdRmVdKF8a5hVEkJIhb3H8%3d" },
        { id: "northeastern-c", opponent: "Northeastern [C]", status: "completed", date: "2026-03-21", whisperScore: 13, opponentScore: 2, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=lvBuv4h1zmyx8%2br7DLVN%2bBVpHHhimUb3rpGzJPMhwPA%3d" },
        { id: "colby", opponent: "Colby", status: "completed", date: "2026-03-21", whisperScore: 6, opponentScore: 13, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=FOaD4EQMSPVzTCHYVmEOASOCqv4IwY09nKkETdmhKS0%3d" },
        { id: "boston-college", opponent: "Boston College", status: "completed", date: "2026-03-22", whisperScore: 2, opponentScore: 15, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=aRmne161Eptc9k7Uxn4P%2bEfmjrIkrtwiKqGk4opJXbs%3d" },
        { id: "central-connecticut-state", opponent: "Central Connecticut State", status: "completed", date: "2026-03-22", whisperScore: 15, opponentScore: 9, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=EZypKtbQ%2b0BZ1HsCa4rtXboa%2b0GsAB9cYh8hZFKthBk%3d" },
        { id: "western-new-england", opponent: "Western New England", status: "completed", date: "2026-03-22", whisperScore: 9, opponentScore: 6, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=Osm7aWhOYhqT8dEuMhS1FsepSb4zu2Zr%2biOwBhT5yxk%3d" },
      ],
    },
    {
      id: "ocean-state-invite-2026",
      name: "Ocean State Invite 26'",
      type: "tournament",
      status: "completed",
      startDate: "2026-03-28",
      endDate: "2026-03-29",
      location: "South Kingston, RI",
      externalUrl: "https://play.usaultimate.org/events/Ocean-State-Invite-26/",
      games: [
        { id: "rhode-island-day-one", opponent: "Rhode Island", status: "completed", date: "2026-03-28", whisperScore: 5, opponentScore: 8, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=ffJUqYLVbbQmqXIfyQApnvNFtfi%2fARQQYxpf2LKnJEQ%3d" },
        { id: "maine", opponent: "Maine", status: "completed", date: "2026-03-28", whisperScore: 4, opponentScore: 9, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=Kxbj8Z1rDBEh2q6fc7jz5aostry6l10pYoSLgYYEOh4%3d" },
        { id: "wentworth-day-one", opponent: "Wentworth", status: "completed", date: "2026-03-28", whisperScore: 12, opponentScore: 5, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=SV9EJ3x7hLap%2f%2fDAdMjU1mvy%2bnqCZj017ahOGZFhR8Q%3d" },
        { id: "bates", opponent: "Bates", status: "completed", date: "2026-03-28", whisperScore: 6, opponentScore: 8, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=BVUhDqPdI5DUfIpwRZ2rXJdcUeT0fsaeL1tGs8JLRPM%3d" },
        { id: "rhode-island-day-two", opponent: "Rhode Island", status: "completed", date: "2026-03-29", whisperScore: 8, opponentScore: 12, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=9OqhYXPKY4yHwmg9GkJi7ae4Sj9%2bKDuSiUeQIYPCsIo%3d" },
        { id: "western-new-england", opponent: "Western New England", status: "completed", date: "2026-03-29", whisperScore: 14, opponentScore: 0, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=mtjXCpdMnrvD0tJy%2bclD7thKZdZgUk7XP%2fIdl%2f6pyJg%3d" },
        { id: "wentworth-day-two", opponent: "Wentworth", status: "completed", date: "2026-03-29", whisperScore: 11, opponentScore: 6, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=k5jOxMy1xN9M6jVMWs%2bX5GtHcfFAE3utyL2jSbzmnGA%3d" },
      ],
    },
    {
      id: "south-new-england-d3-mens-conferences",
      name: "South New England D-III Men's Conferences",
      type: "tournament",
      status: "completed",
      startDate: "2026-04-11",
      endDate: "2026-04-12",
      locationName: "Cole Field",
      location: "Williamstown, MA",
      externalUrl: "https://play.usaultimate.org/events/South-New-England-D-III-Mens-Conferences-2026/",
      games: [
        { id: "bryant", opponent: "Bryant", status: "completed", date: "2026-04-11", whisperScore: 5, opponentScore: 12, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=gNyyMPi0DaoefVfy65U4Y3dqj38HW3cgwamAFYOX2Ts%3d" },
        { id: "roger-williams", opponent: "Roger Williams", status: "completed", date: "2026-04-11", whisperScore: 10, opponentScore: 13, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=buMOcf1hUYN5OqtPv15cjJBEp6Au9tcX8Gvk3cEBv9U%3d" },
        { id: "williams", opponent: "Williams", status: "completed", date: "2026-04-11", whisperScore: 3, opponentScore: 13, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=BeKLpdSOIo5AivtZpuS8xoc3qRvc0K8KcEhL5AlSmZk%3d" },
        { id: "amherst", opponent: "Amherst", status: "completed", date: "2026-04-11", whisperScore: 11, opponentScore: 15, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=fQNu4onyLEnhulJ9TYoM4T6NT16F83omO1Ro782cCyg%3d" },
        { id: "western-new-england", opponent: "Western New England", status: "completed", date: "2026-04-12", whisperScore: 11, opponentScore: 12, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=IjOMP8PMfuguroeVzTKfO2sqFxVxA%2fMOACj1ZeIUaDw%3d" },
        { id: "holy-cross", opponent: "Holy Cross", status: "completed", date: "2026-04-12", whisperScore: 15, opponentScore: 5, externalUrl: "https://play.usaultimate.org/teams/events/match_report/?EventGameId=kRhA0sQE0Ybwc4ZSFFwqdWjgZOeeqi7FnX8elXYX1do%3d" },
      ],
    },
  ] satisfies readonly ScheduleEvent[];
