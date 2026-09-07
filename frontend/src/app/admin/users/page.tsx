"use client";

import { useMemo, useState } from "react";
import { Button, Card, Chip, SearchField } from "@heroui/react";
import {
  Search,
  Download,
  UserPlus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Users,
  GraduationCap,
  History,
  ShieldCheck,
  TrendingUp,
  Box,
  CheckCircle2,
  Eye,
  MoreVertical,
  SlidersHorizontal,
  X,
  Settings2,
  Shield,
  KeyRound,
  Lock,
  BookOpen,
  ExternalLink,
  UserCog,
  AlertTriangle,
  UserRound,
  Building2,
  Save,
  RotateCcw,
  UserX,
} from "lucide-react";

type UserRole =
  | "Super Admin"
  | "Institutional Admin"
  | "Educator / Faculty"
  | "Spatial Content Creator"
  | "Scholar / Student";

type UserStatus = "Active" | "Pending 2FA" | "Suspended";

type LabAccess =
  | "Full Root WebGL"
  | "WebGL + AR QuickLook"
  | "Bound 14 books"
  | "Standard Reader"
  | "Full WebGL + Shaders"
  | "Seat Allocator"
  | "View-Only (Restricted)";

type User = {
  id: number;
  name: string;
  email: string;
  userId: string;
  initials: string;
  role: UserRole;
  institution: string;
  department: string;
  labAccess: LabAccess;
  activity: string;
  status: UserStatus;
  avatar?: string;
  avatarClass?: string;
  avatarTextClass?: string;
};

type Permission = {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: "Alex Rivera",
    email: "alex@edu3d.io",
    userId: "#001",
    initials: "AR",
    role: "Super Admin",
    institution: "Edu3D Core Team",
    department: "Platform Engineering",
    labAccess: "Full Root WebGL",
    activity: "Active Now",
    status: "Active",
    avatar:
      "https://lh3.googleusercontent.com/aida/AEtjO1WJ-2tBmKh0uEzrkaHscW9E99qCh-am2jhVSkyLD0_mwlytLFQYOWjndKGzqBxXLjnF7WU-hqccL-RJD0YvnK5gHu79IVKSeadjYPx1t4mraih4USZEUtsPn0_KnjTFFyei2lHlpH9HSD-97q2HeXItmfD8wyU6Asui5Cuh3PjK2zogkgIvLumTyOjOdweaN-6neB4T9-NwFZMnGD8e0D8p8XwycFQjpTOmaqHSTKZOGhMax1xw3Q9Falfq",
  },
  {
    id: 2,
    name: "Dr. Evelyn Reed",
    email: "evelyn.reed@cambridge.edu",
    userId: "CAM-881",
    initials: "ER",
    role: "Educator / Faculty",
    institution: "Univ. of Cambridge",
    department: "Dept of Cardiology",
    labAccess: "WebGL + AR QuickLook",
    activity: "Active 14m ago",
    status: "Active",
    avatarClass: "bg-secondary/15",
    avatarTextClass: "text-secondary",
  },
  {
    id: 3,
    name: "Dr. Alan Grant",
    email: "a.grant@montana.paleo.edu",
    userId: "MSU-410",
    initials: "AG",
    role: "Educator / Faculty",
    institution: "Montana State Univ.",
    department: "Dept of Paleontology",
    labAccess: "Bound 14 books",
    activity: "Active 1h ago",
    status: "Active",
    avatarClass: "bg-surface-container-high",
    avatarTextClass: "text-on-surface-variant",
  },
  {
    id: 4,
    name: "Alex Nguyen",
    email: "alex.nguyen@stanford.edu",
    userId: "STAN-9932",
    initials: "AN",
    role: "Scholar / Student",
    institution: "Stanford University",
    department: "Undergraduate Pre-Med",
    labAccess: "Standard Reader",
    activity: "Active 2h ago",
    status: "Active",
    avatar:
      "https://lh3.googleusercontent.com/aida/AEtjO1WJ-2tBmKh0uEzrkaHscW9E99qCh-am2jhVSkyLD0_mwlytLFQYOWjndKGzqBxXLjnF7WU-hqccL-RJD0YvnK5gHu79IVKSeadjYPx1t4mraih4USZEUtsPn0_KnjTFFyei2lHlpH9HSD-97q2HeXItmfD8wyU6Asui5Cuh3PjK2zogkgIvLumTyOjOdweaN-6neB4T9-NwFZMnGD8e0D8p8XwycFQjpTOmaqHSTKZOGhMax1xw3Q9Falfq",
  },
  {
    id: 5,
    name: "Prof. Marcus Vance",
    email: "m.vance@oxford.ac.uk",
    userId: "OX-502",
    initials: "MV",
    role: "Spatial Content Creator",
    institution: "Oxford University",
    department: "Dept of Astrophysics",
    labAccess: "Full WebGL + Shaders",
    activity: "Active 1d ago",
    status: "Active",
    avatarClass: "bg-secondary-container/50",
    avatarTextClass: "text-on-secondary-container",
  },
  {
    id: 6,
    name: "Sophia Patel",
    email: "spatel@mit.edu",
    userId: "MIT-ADMIN-20",
    initials: "SP",
    role: "Institutional Admin",
    institution: "MIT Digital Libraries",
    department: "1,240 Campus Seats",
    labAccess: "Seat Allocator",
    activity: "Active 3h ago",
    status: "Pending 2FA",
    avatarClass: "bg-tertiary-container/20",
    avatarTextClass: "text-tertiary",
  },
  {
    id: 7,
    name: "David Kim",
    email: "dkim_astro@berkeley.edu",
    userId: "UCB-712",
    initials: "DK",
    role: "Scholar / Student",
    institution: "UC Berkeley",
    department: "Dept of Astronomy",
    labAccess: "View-Only (Restricted)",
    activity: "Active 2d ago",
    status: "Suspended",
    avatarClass: "bg-surface-container-high",
    avatarTextClass: "text-on-surface-variant",
  },
];

const roles = [
  "All Roles",
  "Super Admin",
  "Institutional Admin",
  "Educator / Faculty",
  "Spatial Content Creator",
  "Scholar / Student",
];

const institutions = [
  "All Institutions",
  "Univ. of Cambridge",
  "Stanford University",
  "Oxford University",
  "MIT Digital Libraries",
  "UC Berkeley",
];

const labTiers = [
  "All 3D Lab Tiers",
  "Full Spatial Lab",
  "Standard Reader",
  "View-Only",
];

const statuses = ["All Statuses", "Active", "Pending 2FA", "Suspended"];

function StatCard({
  label,
  value,
  icon,
  iconClass,
  valueSuffix,
  description,
  progress,
  progressClass = "bg-primary",
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconClass: string;
  valueSuffix?: React.ReactNode;
  description: React.ReactNode;
  progress: number;
  progressClass?: string;
}) {
  return (
    <Card className="rounded-xl border-0 bg-surface-container-lowest p-5 shadow-sm transition-all hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[12px] font-semibold uppercase tracking-wider text-outline">
          {label}
        </span>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-on-surface">
          {value}
        </span>

        {valueSuffix}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 text-[12px] text-on-surface-variant">
        {description}
      </div>

      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-container-high">
        <div
          className={`h-full rounded-full ${progressClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
}

function UserAvatar({
  user,
  large = false,
}: {
  user: User;
  large?: boolean;
}) {
  const size = large ? "h-12 w-12" : "h-9 w-9";

  if (user.avatar) {
    return (
      <img
        src={user.avatar}
        alt={user.name}
        className={`${size} shrink-0 rounded-full object-cover shadow-sm`}
      />
    );
  }

  return (
    <div
      className={`${size} ${
        user.avatarClass ?? "bg-surface-container-high"
      } ${
        user.avatarTextClass ?? "text-on-surface-variant"
      } flex shrink-0 items-center justify-center rounded-full font-bold ${
        large ? "text-base" : "text-sm"
      } shadow-sm`}
    >
      {user.initials}
    </div>
  );
}

function RoleBadge({ role }: { role: UserRole }) {
  const config: Record<
    UserRole,
    {
      className: string;
      icon: React.ReactNode;
      label: string;
    }
  > = {
    "Super Admin": {
      className: "bg-primary-container text-on-primary",
      icon: <ShieldCheck className="h-3.5 w-3.5" />,
      label: "Super Admin",
    },
    "Institutional Admin": {
      className: "bg-tertiary-container/30 text-on-tertiary-container",
      icon: <Building2 className="h-3.5 w-3.5" />,
      label: "Inst. Admin",
    },
    "Educator / Faculty": {
      className: "bg-surface-container-high text-primary",
      icon: <GraduationCap className="h-3.5 w-3.5" />,
      label: "Educator / Faculty",
    },
    "Spatial Content Creator": {
      className: "bg-secondary-container/30 text-secondary",
      icon: <Box className="h-3.5 w-3.5" />,
      label: "Spatial Creator",
    },
    "Scholar / Student": {
      className: "bg-surface-container-high text-on-surface",
      icon: <UserRound className="h-3.5 w-3.5" />,
      label: "Scholar / Student",
    },
  };

  const item = config[role];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.className}`}
    >
      {item.icon}
      {item.label}
    </span>
  );
}

function LabAccessBadge({ access }: { access: LabAccess }) {
  if (access === "Full Root WebGL") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded bg-secondary-container/40 px-2 py-0.5 text-[11px] font-medium text-on-secondary-container">
        <Box className="h-3.5 w-3.5" />
        Full Root WebGL
      </span>
    );
  }

  if (access === "WebGL + AR QuickLook") {
    return (
      <div className="flex flex-col gap-1">
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary">
          <CheckCircle2 className="h-3.5 w-3.5" />
          WebGL + AR QuickLook
        </span>
        <span className="text-[11px] text-outline">
          Author: Cardiovascular Arch.
        </span>
      </div>
    );
  }

  if (access === "Bound 14 books") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded bg-surface-container px-2 py-0.5 text-[11px] font-medium text-on-surface-variant">
        <BookOpen className="h-3.5 w-3.5" />
        Bound 14 books
      </span>
    );
  }

  if (access === "Standard Reader") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded bg-surface-container-high px-2 py-0.5 text-[11px] font-medium text-on-surface">
        <Eye className="h-3.5 w-3.5" />
        Standard Reader
      </span>
    );
  }

  if (access === "Full WebGL + Shaders") {
    return (
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-secondary">
          Full WebGL + Shaders
        </span>
        <span className="text-[11px] text-outline">
          Author: Orbital Mechanics
        </span>
      </div>
    );
  }

  if (access === "Seat Allocator") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded bg-surface-container px-2 py-0.5 text-[11px] font-medium text-on-surface-variant">
        <KeyRound className="h-3.5 w-3.5" />
        Seat Allocator
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded bg-surface-container-high px-2 py-0.5 text-[11px] font-medium text-outline">
      <Lock className="h-3.5 w-3.5" />
      View-Only (Restricted)
    </span>
  );
}

function StatusBadge({ status }: { status: UserStatus }) {
  if (status === "Active") {
    return (
      <span className="rounded-full bg-secondary-container/30 px-2 py-0.5 text-[11px] font-semibold text-on-secondary-container">
        Active
      </span>
    );
  }

  if (status === "Pending 2FA") {
    return (
      <span className="rounded-full bg-tertiary-fixed px-2 py-0.5 text-[11px] font-semibold text-on-tertiary-fixed">
        Pending 2FA
      </span>
    );
  }

  return (
    <span className="rounded-full bg-error-container px-2 py-0.5 text-[11px] font-semibold text-on-error-container">
      Suspended
    </span>
  );
}

function UserRow({
  user,
  selected,
  onSelect,
  onOpen,
}: {
  user: User;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
}) {
  const isDrawerUser = user.id === 2;

  return (
    <tr
      onClick={onOpen}
      className={`group cursor-pointer transition-colors ${
        isDrawerUser
          ? "border-l-4 border-l-primary bg-primary-container/10 hover:bg-primary-container/15"
          : "hover:bg-surface-container-low/70"
      }`}
    >
      <td
        className="p-3.5 pl-4"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          className="h-4 w-4 cursor-pointer rounded text-primary focus:ring-primary"
        />
      </td>

      <td className="p-3.5">
        <div className="flex min-w-58 items-center gap-3">
          <UserAvatar user={user} />

          <div className="flex min-w-0 flex-col">
            <span
              className={`truncate font-semibold transition-colors ${
                isDrawerUser
                  ? "font-bold text-primary"
                  : "text-on-surface group-hover:text-primary"
              }`}
            >
              {user.name}
            </span>

            <span className="truncate text-[12px] text-outline">
              {user.email} • {user.userId}
            </span>
          </div>
        </div>
      </td>

      <td className="p-3.5">
        <RoleBadge role={user.role} />
      </td>

      <td className="p-3.5">
        <div className="flex min-w-43 flex-col">
          <span className="font-medium text-on-surface">
            {user.institution}
          </span>
          <span className="text-[12px] text-outline">
            {user.department}
          </span>
        </div>
      </td>

      <td className="p-3.5">
        <LabAccessBadge access={user.labAccess} />
      </td>

      <td className="p-3.5">
        {user.activity === "Active Now" ? (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-secondary">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-secondary" />
            Active Now
          </span>
        ) : (
          <span className="whitespace-nowrap text-[12px] text-on-surface-variant">
            {user.activity}
          </span>
        )}
      </td>

      <td className="p-3.5">
        <StatusBadge status={user.status} />
      </td>

      <td
        className="p-3.5 pr-4 text-right"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={onOpen}
            title="Edit Permissions"
            className={`rounded-lg p-1.5 transition-all ${
              isDrawerUser
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "text-outline hover:bg-surface-container hover:text-primary"
            }`}
          >
            {isDrawerUser ? (
              <Eye className="h-5 w-5" />
            ) : (
              <Settings2 className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            title="More Actions"
            className="rounded-lg p-1.5 text-outline transition-all hover:bg-surface-container hover:text-on-surface"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function UserMobileCard({
  user,
  selected,
  onSelect,
  onOpen,
}: {
  user: User;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
}) {
  return (
    <Card
      onClick={onOpen}
      className={`cursor-pointer rounded-xl border-0 p-4 shadow-sm ${
        selected
          ? "bg-primary-container/5 ring-1 ring-primary/30"
          : "bg-surface-container-lowest"
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={(event) => {
            event.stopPropagation();
            onSelect();
          }}
          onClick={(event) => event.stopPropagation()}
          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary"
        />

        <UserAvatar user={user} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-on-surface">
                {user.name}
              </h3>
              <p className="truncate text-[11px] text-outline">
                {user.email}
              </p>
            </div>

            <StatusBadge status={user.status} />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <RoleBadge role={user.role} />
            <LabAccessBadge access={user.labAccess} />
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-surface-container-high/50 pt-3 text-[11px]">
            <span className="text-outline">{user.institution}</span>
            <span className="text-on-surface-variant">{user.activity}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function SelectField({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative min-w-38">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full cursor-pointer appearance-none rounded-lg bg-surface-container-low px-3 pr-9 text-[13px] text-on-surface outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
    </div>
  );
}

function PermissionToggle({
  permission,
  onChange,
}: {
  permission: Permission;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-surface p-2.5 transition-colors hover:bg-surface-container-low">
      <div className="flex min-w-0 flex-col pr-3">
        <span className="text-[13px] font-semibold text-on-surface">
          {permission.title}
        </span>

        <span className="text-[11px] leading-5 text-outline">
          {permission.description}
        </span>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={permission.enabled}
        onClick={onChange}
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
          permission.enabled
            ? "bg-primary"
            : "bg-surface-container-highest"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
            permission.enabled ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}

function UserDetailDrawer({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  const [role, setRole] = useState("Giảng viên & Trưởng khoa");

  const [permissions, setPermissions] = useState<Permission[]>([
    {
      id: "models",
      title: "Quản lý Mô hình 3D & Liên kết WebGL",
      description: "Có thể liên kết trực tiếp tài nguyên .GLB/.USDZ với văn bản tham chiếu",
      enabled: true,
    },
    {
      id: "publish",
      title: "Xuất bản Giáo trình / Sách mới",
      description: "Cho phép quy trình duyệt phản biện & xuất bản trực tiếp",
      enabled: true,
    },
    {
      id: "analytics",
      title: "Sổ điểm Sinh viên & Phân tích Không gian",
      description: "Truy cập bản đồ nhiệt mức độ tương tác và điểm bài lab của nhóm",
      enabled: true,
    },
    {
      id: "billing",
      title: "Thanh toán Hệ thống & Cấu hình SSO",
      description: "Cấu hình SAML/OAuth và hóa đơn số lượng tài khoản tổ chức",
      enabled: false,
    },
  ]);

  const togglePermission = (id: string) => {
    setPermissions((current) =>
      current.map((permission) =>
        permission.id === id
          ? { ...permission, enabled: !permission.enabled }
          : permission,
      ),
    );
  };

  return (
    <Card className="sticky top-20 rounded-xl border-0 bg-surface-container-lowest p-6 shadow-md">
      {/* Tiêu đề Drawer */}
      <div className="mb-4 flex items-center justify-between border-b border-surface-container-high/60 pb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="text-5 font-bold leading-none text-on-surface">Quyền của Học viên</h2>
        </div>

        <div className="flex items-center gap-1.5">
          <Chip size="sm" className="bg-secondary-container/40 text-[10px] font-bold uppercase tracking-wider text-on-secondary-container">
            Đồng bộ Trực tiếp
          </Chip>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-outline transition-all hover:bg-surface-container-low hover:text-on-surface"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Thông tin người dùng */}
      <div className="mb-5 flex items-center justify-between gap-3 rounded-xl bg-surface-container-low/70 p-4">
        <div className="flex min-w-0 items-center gap-3.5">
          <UserAvatar user={user} large />

          <div className="flex min-w-0 flex-col">
            <span className="truncate text-[16px] font-bold leading-tight text-on-surface">{user.name}</span>
            <span className="truncate text-[12px] text-outline">{user.email}</span>
            <span className="mt-0.5 truncate text-[11px] font-medium text-primary">
              {user.institution} • {user.department}
            </span>
          </div>
        </div>

        <Chip size="sm" className="shrink-0 bg-surface-container-high text-primary">
          Giảng viên
        </Chip>
      </div>

      {/* Phân quyền RBAC */}
      <div className="mb-5 flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-wider text-outline">
          Cấp độ Vai trò RBAC
        </label>

        <div className="relative">
          <select
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="h-10 w-full appearance-none rounded-lg bg-surface-container px-3 pr-9 text-[14px] text-on-surface outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option>Giảng viên & Trưởng khoa</option>
            <option>Người sáng tạo Nội dung Không gian</option>
            <option>Quản trị viên Tổ chức</option>
            <option>Học viên / Sinh viên đã đăng ký</option>

            <option>Super Admin Hệ thống</option>
          </select>

          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
        </div>

        <p className="text-[11px] leading-5 text-outline">
          Kế thừa quyền môi trường thử nghiệm không gian, token xuất AR và quyền biên soạn chương trình học.
        </p>
      </div>

      {/* Danh sách Quyền chi tiết */}
      <div className="mb-5 flex flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-outline">
          Quyền Chi tiết
        </span>

        {permissions.map((permission) => (
          <PermissionToggle
            key={permission.id}
            permission={permission}
            onChange={() => togglePermission(permission.id)}
          />
        ))}
      </div>

      {/* Sách / Giáo trình chính */}
      <div className="mb-5 flex flex-col gap-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-outline">
          Tập Giáo trình Chính
        </span>

        <div className="flex items-center justify-between rounded-lg bg-surface-container-low p-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-10 shrink-0 items-center justify-center rounded bg-primary/10 text-primary shadow-sm">
              <BookOpen className="h-5 w-5" />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[13px] font-semibold text-on-surface">
                Cấu trúc Hệ Tim mạch
              </span>

              <span className="text-[11px] text-outline">
                12 Nút 3D Tương tác • 840 Độc giả
              </span>
            </div>
          </div>

          <button
            type="button"
            className="rounded p-1 text-primary transition-colors hover:text-primary-container"
          >
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Bảo mật & Đăng nhập */}
      <div className="mb-6 flex flex-col gap-2 rounded-lg bg-surface-container-high/40 p-3 text-[12px]">
        <div className="flex items-center justify-between text-on-surface">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span className="font-semibold">Bảo mật 2FA</span>
          </span>

          <span className="font-medium text-secondary">
            Bắt buộc (YubiKey)
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-[11px] text-outline">
          <span>Nhà cung cấp Danh tính SSO</span>
          <span className="text-right font-mono text-on-surface">
            Cambridge-Shibboleth SAML
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-[11px] text-outline">
          <span>IP Đăng nhập Cuối</span>
          <span className="text-right font-mono text-on-surface">
            131.111.8.24 (Vương quốc Anh)
          </span>
        </div>
      </div>

      {/* Nút thao tác */}
      <div className="flex flex-col gap-2 border-t border-surface-container-high/60 pt-3">
        <Button className="w-full rounded-lg bg-primary-container font-semibold text-on-primary shadow-sm">
          <Save className="h-5 w-5" />
          Lưu Quyền & Thông báo Người dùng
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button className="rounded-lg bg-surface-container text-[13px] text-on-surface">
            <RotateCcw className="h-4 w-4" />
            Đặt lại Mật khẩu
          </Button>

          <Button className="rounded-lg bg-error-container/60 text-[13px] font-medium text-on-error-container">
            <UserX className="h-4 w-4" />
            Thu hồi Quyền
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function UsersPage() {
// --- STATE MANAGEMENT ---
const [search, setSearch] = useState("");

const [role, setRole] = useState("All Roles");
const [institution, setInstitution] = useState("All Institutions");
const [labTier, setLabTier] = useState("All 3D Lab Tiers");
const [status, setStatus] = useState("All Statuses");

const [selectedIds, setSelectedIds] = useState<number[]>([2]);
const [selectedUserId, setSelectedUserId] = useState<number | null>(2);

const [showDrawer, setShowDrawer] = useState(true);

// --- LỌC DỮ LIỆU NGƯỜI DÙNG ---
const filteredUsers = useMemo(() => {
  const query = search.trim().toLowerCase();

  return users.filter((user) => {
    const matchesSearch =
      !query ||
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.institution.toLowerCase().includes(query) ||
      user.userId.toLowerCase().includes(query);

    const matchesRole = role === "All Roles" || user.role === role;

    const matchesInstitution =
      institution === "All Institutions" || user.institution === institution;

    const matchesLab =
      labTier === "All 3D Lab Tiers" ||
      (labTier === "Full Spatial Lab" &&
        [
          "Full Root WebGL",
          "WebGL + AR QuickLook",
          "Full WebGL + Shaders",
        ].includes(user.labAccess)) ||
      (labTier === "Standard Reader" && user.labAccess === "Standard Reader") ||
      (labTier === "View-Only" && user.labAccess === "View-Only (Restricted)");

    const matchesStatus = status === "All Statuses" || user.status === status;

    return (
      matchesSearch &&
      matchesRole &&
      matchesInstitution &&
      matchesLab &&
      matchesStatus
    );
  });
}, [search, role, institution, labTier, status]);

// --- THÔNG TIN NGƯỜI DÙNG ĐƯỢC CHỌN ---
const selectedUser = users.find((user) => user.id === selectedUserId) ?? null;

const allSelected =
  filteredUsers.length > 0 &&
  filteredUsers.every((user) => selectedIds.includes(user.id));

// --- CÁC HÀM XỬ LÝ SỰ KIỆN ---

// Chọn / Bỏ chọn 1 người dùng
const toggleUser = (id: number) => {
  setSelectedIds((current) =>
    current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id],
  );
};

// Chọn / Bỏ chọn tất cả người dùng
const toggleAll = () => {
  if (allSelected) {
    setSelectedIds((current) =>
      current.filter((id) => !filteredUsers.some((user) => user.id === id)),
    );
    return;
  }

  setSelectedIds((current) => [
    ...new Set([...current, ...filteredUsers.map((user) => user.id)]),
  ]);
};

// Xem chi tiết người dùng
const openUser = (user: User) => {
  setSelectedUserId(user.id);
  setShowDrawer(true);
  setSelectedIds((current) =>
    current.includes(user.id) ? current : [...current, user.id],
  );
};

// Đặt lại tất cả bộ lọc
const resetFilters = () => {
  setSearch("");
  setRole("All Roles");
  setInstitution("All Institutions");
  setLabTier("All 3D Lab Tiers");
  setStatus("All Statuses");
};

  return (
    <main className="min-h-screen w-full bg-surface px-4 pb-12 pt-6 text-on-surface sm:px-6 lg:px-8">
    {/* Tiêu đề trang */}
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
        <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[28px] font-bold tracking-tight text-on-surface sm:text-[36px]">
            Quản lý Người dùng & Quyền truy cập
            </h1>

            <Chip size="sm" className="gap-1 bg-primary/10 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            RBAC Hoạt động
            </Chip>
        </div>

        <p className="mt-1 text-sm leading-7 text-on-surface-variant">
            Quản lý 24.850 nhà nghiên cứu, giảng viên, người kiểm duyệt nội dung và quản trị viên hệ thống.
        </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
        <Button className="rounded-lg bg-surface-container-lowest text-on-surface shadow-sm">
            <Download className="h-5 w-5 text-outline" />
            Xuất danh sách (CSV)
        </Button>

        <Button className="rounded-lg bg-surface-container-lowest text-on-surface shadow-sm">
            <Settings2 className="h-5 w-5 text-outline" />
            Thao tác vai trò hàng loạt
            <ChevronDown className="h-4 w-4 text-outline" />
        </Button>

        <Button className="rounded-lg bg-primary-container text-on-primary shadow-md">
            <UserPlus className="h-5 w-5" />
            + Mời người dùng / Quản trị viên
        </Button>
        </div>
    </div>

    {/* Thống kê KPI */}
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
        label="Tổng số người dùng đã đăng ký"
        value="24,850"
        icon={<Users className="h-5 w-5" />}
        iconClass="bg-primary-container/10 text-primary"
        valueSuffix={
            <span className="inline-flex items-center text-[12px] font-semibold text-secondary">
            <TrendingUp className="h-3.5 w-3.5" />
            +8.7%
            </span>
        }
        description={
            <>
            <span>Mục tiêu: 28,000</span>
            <span>88.7% chỉ tiêu Q3</span>
            </>
        }
        progress={88.7}
        />

        <StatCard
        label="Học viên & Giảng viên hoạt động"
        value="18,420"
        icon={<GraduationCap className="h-5 w-5" />}
        iconClass="bg-secondary-container/30 text-secondary"
        valueSuffix={
            <span className="text-[12px] font-medium text-outline">
            74.1% hoạt động trong 30 ngày
            </span>
        }
        description={
            <>
            <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                1,842 đang trong phòng lab WebGL/AR
            </span>
            </>
        }
        progress={74.1}
        progressClass="bg-secondary"
        />

        <StatCard
        label="Giảng viên & Sáng tạo nội dung"
        value="1,410"
        icon={<History className="h-5 w-5" />}
        iconClass="bg-surface-container-high text-primary"
        valueSuffix={
            <span className="rounded bg-surface-container-high px-1.5 py-0.5 text-[11px] font-semibold text-primary">
            64 Mới
            </span>
        }
        description={
            <span>Đang biên soạn 648 giáo trình không gian & mô hình 3D</span>
        }
        progress={62}
        />

        <StatCard
        label="Quản trị viên hệ thống"
        value="12"
        icon={<ShieldCheck className="h-5 w-5" />}
        iconClass="bg-surface-container-high text-on-surface"
        valueSuffix={
            <span className="rounded-full bg-secondary-container/40 px-2 py-0.5 text-[11px] font-semibold text-on-secondary-container">
            100% Xác thực 2 bước (2FA)
            </span>
        }
        description={
            <span>Đã áp dụng toàn bộ quyền Root RBAC</span>
        }
        progress={100}
        progressClass="bg-on-secondary-container"
        />
    </div>

    {/* Nội dung chính */}
    <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        {/* Bảng dữ liệu */}
        <div className={`flex flex-col gap-4 transition-all duration-300 ${showDrawer ? "xl:col-span-8" : "xl:col-span-12"}`}>
        {/* Bộ lọc */}
        <Card className="rounded-xl border-0 bg-surface-container-lowest p-4 shadow-sm">
            <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <SearchField name="search" aria-label="Tìm kiếm theo tên, email trường, tổ chức, hoặc mã sinh viên...">
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="flex-1" placeholder="Tìm kiếm theo tên, email trường, tổ chức, hoặc mã sinh viên..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
                </SearchField>

                <div className="flex flex-wrap items-center gap-2">
                <SelectField value={role} options={roles} onChange={setRole} />
                <SelectField value={institution} options={institutions} onChange={setInstitution} />
                <SelectField value={labTier} options={labTiers} onChange={setLabTier} />
                <SelectField value={status} options={statuses} onChange={setStatus} />
                </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 text-[12px] text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                <span className="text-outline">Bộ lọc đang dùng:</span>

                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-container px-2.5 py-1 text-on-surface">
                    Khóa: 2024-2025
                    <X className="h-3.5 w-3.5 text-outline hover:text-error" />
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-container px-2.5 py-1 text-on-surface">
                    Trạng thái: Hoạt động & Đã xác minh
                    <X className="h-3.5 w-3.5 text-outline hover:text-error" />
                </span>

                <button type="button" onClick={resetFilters} className="ml-1 text-primary hover:underline">
                    Đặt lại tất cả
                </button>
                </div>

                <span className="font-medium text-on-surface">
                Đang hiển thị {filteredUsers.length} trên 24,850 người dùng
                </span>
            </div>
            </div>
        </Card>

        {/* Bảng hiển thị trên Desktop */}
        <Card className="hidden overflow-hidden rounded-xl border-0 bg-surface-container-lowest shadow-sm md:flex">
            <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
                <thead>
                <tr className="bg-surface-container-low text-[12px] uppercase tracking-wider text-outline">
                    <th className="w-10 p-3.5 pl-4">
                    <input
                        type="checkbox"
                        checked={allSelected}
                        onChange={toggleAll}
                        className="h-4 w-4 rounded text-primary focus:ring-primary"
                    />
                    </th>
                    <th className="p-3.5 font-semibold">Người dùng / Học viên</th>
                    <th className="p-3.5 font-semibold">Vai trò</th>
                    <th className="p-3.5 font-semibold">Tổ chức & Khoa</th>
                    <th className="p-3.5 font-semibold">Quyền phòng Lab</th>
                    <th className="p-3.5 font-semibold">Hoạt động</th>
                    <th className="p-3.5 font-semibold">Trạng thái</th>
                    <th className="p-3.5 pr-4 text-right font-semibold">Hành động</th>
                </tr>
                </thead>

                <tbody className="text-[14px]">
                {filteredUsers.map((user) => (
                    <UserRow
                    key={user.id}
                    user={user}
                    selected={selectedIds.includes(user.id)}
                    onSelect={() => toggleUser(user.id)}
                    onOpen={() => openUser(user)}
                    />
                ))}
                </tbody>
            </table>
            </div>

            {filteredUsers.length === 0 && (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <Search className="h-6 w-6 text-outline" />
                <h3 className="mt-3 font-semibold text-on-surface">Không tìm thấy người dùng</h3>
                <p className="mt-1 text-sm text-on-surface-variant">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc.</p>
            </div>
            )}

            {/* Chân trang / Phân trang */}
            <div className="flex flex-col items-center justify-between gap-3 bg-surface-container-low p-4 text-[13px] text-on-surface-variant sm:flex-row">
            <div className="flex items-center gap-2">
                <span>Số dòng mỗi trang:</span>

                <select className="h-8 cursor-pointer rounded bg-surface-container-lowest px-2 text-on-surface outline-none">
                <option>7</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
                </select>

                <span className="ml-2 text-outline">
                Hiển thị 1–7 trên 24.850 người dùng
                </span>
            </div>

            <div className="flex items-center gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-outline hover:text-on-surface">
                <ChevronLeft className="h-4 w-4" />
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-container font-semibold text-on-primary">
                1
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container">
                2
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container">
                3
                </button>

                <span className="px-1 text-outline">...</span>

                <button className="flex h-8 items-center justify-center rounded-lg bg-surface-container-lowest px-2.5 text-on-surface hover:bg-surface-container">
                3,550
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-outline hover:text-on-surface">
                <ChevronRight className="h-4 w-4" />
                </button>
            </div>
            </div>
        </Card>

        {/* Hiển thị dạng Card trên Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
            {filteredUsers.map((user) => (
            <UserMobileCard
                key={user.id}
                user={user}
                selected={selectedIds.includes(user.id)}
                onSelect={() => toggleUser(user.id)}
                onOpen={() => openUser(user)}
            />
            ))}

            {filteredUsers.length === 0 && (
            <Card className="border-0 bg-surface-container-lowest p-10 text-center">
                <Search className="mx-auto h-6 w-6 text-outline" />
                <h3 className="mt-3 font-semibold">Không tìm thấy người dùng</h3>
            </Card>
            )}
        </div>
        </div>

        {/* Bảng thông tin chi tiết (Drawer) */}
        {showDrawer && selectedUser && (
        <div className="xl:col-span-4">
            <UserDetailDrawer
            user={selectedUser}
            onClose={() => setShowDrawer(false)}
            />
        </div>
        )}
    </div>
    </main>
  );
}