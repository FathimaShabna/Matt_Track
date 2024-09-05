import { FaRegCalendarAlt, FaRegHospital } from "react-icons/fa";
import { FiMap, FiUsers } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineChartSquareBar } from "react-icons/hi";
import {
  RiCustomerService2Line,
  RiDashboardLine,
  RiFileUploadLine,
  RiShieldUserLine,
  RiTodoLine,
} from "react-icons/ri";
import { BiCarousel, BiCartAlt, BiErrorAlt, BiTask } from "react-icons/bi";
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,
  BsQuestionDiamond,
} from "react-icons/bs";
import { DiHtml5Multimedia } from "react-icons/di";
import {
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineEdit, AiOutlineUnorderedList } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { LayoutDashboard } from "lucide-react";
import { RiTeamLine } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { SiMicrosoftteams } from "react-icons/si";
import { BsChatRightDots } from "react-icons/bs";

const routesConfig = [
  // Manager
  {
    id: "manager",
    title: "Manager",
    messageId: "sidebar.manager",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        messageId: "sidebar.manager.dashboard",
        type: "item",
        icon: <MdOutlineSpaceDashboard />,
        url: "/manager/dashboard",
        allowedRoles: ["manager"],
      },
      {
        id: "team",
        title: "My Team",
        messageId: "sidebar.manager.myteam",
        type: "item",
        icon: <RiTeamLine />,
        url: "/manager/my-team",
        allowedRoles: ["manager"],
      },
      {
        id: "tasks",
        title: "Tasks",
        messageId: "sidebar.manager.tasks",
        type: "item",
        icon: <GoTasklist />,
        url: "/manager/tasks",
        allowedRoles: ["manager"],
      },
      {
        id: "reports",
        title: "Reports",
        messageId: "sidebar.manager.reports",
        type: "item",
        icon: <HiOutlineDocumentReport />,
        url: "/manager/reports",
        allowedRoles: ["manager"],
      },
      {
        id: "calendar",
        title: "Calendar",
        messageId: "sidebar.manager.calendar",
        type: "item",
        icon: <IoCalendarOutline />,
        url: "/manager/calendar",
        allowedRoles: ["manager"],
      },
      // {
      //   id: "chat",
      //   title: "Chat",
      //   messageId: "sidebar.chat",
      //   type: "item",
      //   icon: <HiOutlineAcademicCap />,
      //   url: "/manager/academy",
      // },
    ],
  },

  // Admin
  {
    id: "admin",
    title: "Admin",
    messageId: "sidebar.admin",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        messageId: "sidebar.admin.dashboard",
        type: "item",
        icon: <MdOutlineSpaceDashboard />,
        url: "/admin/dashboard",
        allowedRoles: ["admin"],
      },
      {
        id: "users",
        title: "Users",
        messageId: "sidebar.admin.user",
        type: "item",
        icon: <RiTeamLine />,
        url: "/admin/users",
        allowedRoles: ["admin"],
      },
      {
        id: "team",
        title: "Teams",
        messageId: "sidebar.admin.myteam",
        type: "item",
        icon: <SiMicrosoftteams />,
        url: "/admin/teams",
        allowedRoles: ["admin"],
      },
      {
        id:"project",
        title:"Project",
        messageId:"project",
        type:"item",
        icon: <SiMicrosoftteams />,
        url:"/admin/projects",
        allowedRoles:["admin"]

      }
    ],
  },

  // Team Lead
  {
    id: "teamlead",
    title: "Team Lead",
    messageId: "sidebar.teamlead",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        messageId: "sidebar.teamlead.dashboard",
        type: "item",
        icon: <MdOutlineSpaceDashboard />,
        url: "/teamlead/dashboard",
        allowedRoles: ["teamlead"],
      },
      {
        id: "team",
        title: "Teams",
        messageId: "sidebar.teamlead.teams",
        type: "item",
        icon: <SiMicrosoftteams />,
        url: "/teamlead/teams",
        allowedRoles: ["teamlead"],
      },
      {
        id: "tasks",
        title: "Tasks",
        messageId: "sidebar.teamlead.tasks",
        type: "item",
        icon: <GoTasklist />,
        url: "/teamlead/tasks",
        allowedRoles: ["teamlead"],
      },
    ],
  },

  // Employees
  {
    id: "employees",
    title: "Employee",
    messageId: "sidebar.employees",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        messageId: "sidebar.employess.dashboard",
        type: "item",
        icon: <MdOutlineSpaceDashboard />,
        url: "/employee/dashboard",
        allowedRoles: ["employee"],
      },
      {
        id: "tasks",
        title: "Tasks",
        messageId: "sidebar.employess.tasks",
        type: "item",
        icon: <GoTasklist />,
        url: "/employee/tasks",
        allowedRoles: ["employee"],
      },
      {
        id: "team-chat",
        title: "Team Chat",
        messageId: "sidebar.employess.teamchat",
        type: "item",
        icon: <BsChatRightDots />,
        url: "/employee/chat",
        allowedRoles: ["employee"],
      },
    ],
  },
];
export default routesConfig;
