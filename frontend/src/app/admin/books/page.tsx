"use client";

import { useMemo, useState } from "react";
import { Button, Card, Chip, Input, SearchField } from "@heroui/react";
import {
  Search,
  SlidersHorizontal,
  Download,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  BookOpen,
  BadgeCheck,
  Box,
  MessageSquareText,
  TrendingUp,
  Clock3,
  Star,
  Eye,
  MoreVertical,
  FilePenLine,
  X,
  Link2,
  CheckCircle2,
  AlertTriangle,
  Maximize2,
  Upload,
  Table2,
  Grid2X2,
  SortAsc,
  CircleHelp,
} from "lucide-react";

type BookStatus = "Published" | "In Review" | "Draft";

type Book = {
  id: number;
  title: string;
  subtitle: string;
  isbn: string;
  discipline: string;
  level: string;
  author: string;
  affiliation: string;
  model: string | null;
  rating: number;
  reads: string;
  status: BookStatus;
  cover?: string;
  icon?: string;
};

type Model = {
  id: number;
  name: string;
  format: "GLB" | "USDZ";
  metadata: string;
  author?: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Dinosaur World: Mesozoic Era",
    subtitle: "A Comprehensive Study · Vol. 1",
    isbn: "978-0-143-2281",
    discipline: "Paleontology",
    level: "Undergraduate Tier",
    author: "Dr. Alan Grant",
    affiliation: "Montana Paleo Inst.",
    model: "T-Rex Cranium (GLB)",
    rating: 4.9,
    reads: "42.8k",
    status: "Published",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_WUmjAYVD21MXn1VGEVDkOhhauoc5tcR32Bdtu6ntvk0_5iTPTm4hUYdL_N9OVWE8FeCglUUBu_ZJH5nON4hu8I_ccXZ9uOPK_xqgbzfDWYCVcLmAqZSbCvzfr1uLFNtpNR2GkN55rw2cxGxVftVXiXWt-pIxDn-v0Mhnr_h_t7rUZ4F6IG7rEmnr6AmO4SDVPvJ7U8h1I3YJrMsjJBOnKjE5c0Zqpl5_CM9a1tF5GuJExPx2LDT24w",
  },
  {
    id: 2,
    title: "Cardiovascular Architecture",
    subtitle: "A Comprehensive Guide to Heart Structure",
    isbn: "978-1-588-4019",
    discipline: "Human Anatomy",
    level: "Medical School",
    author: "Dr. Evelyn Reed",
    affiliation: "Johns Hopkins Med",
    model: "4-Chamber Heart 3D",
    rating: 4.8,
    reads: "31.4k",
    status: "Published",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj2EYMqO8IJGsIJ8_4QjeuPRcZQ3gZam7_xBX8-2SRhIX2h053DC6qqvEMxC4T-ZOkZTIaUFs8fkONM4oSyzKjjAUiwTZ87bCoHQLCAttKhK4Kp85991K_ZdHPcQGlXqFkC-15rQLV6zzYrliojKXLzq9QpCaSLvXgbwape4l6HkfW7zjGoysXTjOBz-AzJBVpxNpHKKxaQA1-ofCOothun7gc_Rs_usu8lUy552BP97pignXXFsBVwQ",
  },
  {
    id: 3,
    title: "Orbital Mechanics & Deep Space",
    subtitle: "Fundamentals in Astrodynamics",
    isbn: "978-0-394-1920",
    discipline: "Astrophysics",
    level: "Graduate Tier",
    author: "Prof. Marcus Vance",
    affiliation: "Cambridge Astronomy",
    model: "JWST Spacecraft",
    rating: 4.95,
    reads: "18.9k",
    status: "Published",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBBow9BFDbnruwOLf8tx9gG4A3xNVwovrWjMGW1KJsm9VXBlSOcfKigR4JR2VrARPuO0E5M8vNrCBwq5QkaV56BknNspopMouVJsbGaSVVwsqp1JFdnhDvuqeZijgpIqFzd3-kSgZNUr16O58eiQ6A9w56TL8ZRfUDUK1tb7oOLQwHqsOlsl4qfp-tWik4PFu6BwJ0fORr5KZPvVZGAh9PmFuk6tHKznNIMfOgLOreZKoUg7VY9RcU7g",
  },
  {
    id: 4,
    title: "Microbial Worlds & Virology",
    subtitle: "Mechanics of Bacteriophages",
    isbn: "978-0-262-5100",
    discipline: "Microbiology",
    level: "Upper Division",
    author: "Dr. Sarah Lin",
    affiliation: "MIT Bioengineering",
    model: "T4 Phage Structure",
    rating: 4.7,
    reads: "12.1k",
    status: "In Review",
    icon: "coronavirus",
  },
  {
    id: 5,
    title: "Ancient Rome: Architectural Eng.",
    subtitle: "Volumetric Reconstruction of the Forum",
    isbn: "978-0-674-9900",
    discipline: "World History",
    level: "Undergraduate",
    author: "Elena Rostova",
    affiliation: "Inst. Klass. Arch.",
    model: null,
    rating: 4.6,
    reads: "8.6k",
    status: "Draft",
    icon: "account_balance",
  },
];

const models: Model[] = [
  {
    id: 1,
    name: "Roman Colosseum Section 3D",
    format: "GLB",
    metadata: "38.4k Tris · PBR Textures · 12.8 MB",
    author: "Imperial Heritage 3D Labs",
  },
  {
    id: 2,
    name: "Roman Aqueduct Structural Rig",
    format: "USDZ",
    metadata: "22.1k Tris · Physics Enabled · 8.4 MB",
  },
  {
    id: 3,
    name: "Pantheon Dome Volumetric Mesh",
    format: "GLB",
    metadata: "54.0k Tris · Occlusion Baked · 18.2 MB",
  },
];

const disciplines = [
  "All Disciplines",
  "Paleontology",
  "Human Anatomy",
  "Astrophysics",
  "Microbiology",
  "World History",
];

const statuses = ["All Statuses", "Published", "In Review", "Draft"];

function StatCard({
  label,
  value,
  icon,
  iconClass,
  suffix,
  description,
  progress,
  progressClass = "bg-primary",
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconClass: string;
  suffix?: React.ReactNode;
  description: string;
  progress: number;
  progressClass?: string;
}) {
  return (
    <Card className="relative overflow-hidden rounded-xl border-0 bg-surface-container-lowest p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold uppercase tracking-wider text-outline">
          {label}
        </span>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-on-surface">
          {value}
        </span>

        {suffix}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 text-[13px] text-on-surface-variant">
        <span>{description}</span>
      </div>

      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
        <div
          className={`h-full rounded-full ${progressClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
}

function BookCover({ book }: { book: Book }) {
  if (book.cover) {
    return (
      <img
        src={book.cover}
        alt={book.title}
        className="h-16 w-12 shrink-0 rounded-lg object-cover shadow-sm"
      />
    );
  }

  return (
    <div
      className={`flex h-16 w-12 shrink-0 flex-col items-center justify-center rounded-lg p-1 text-center text-white shadow-sm ${
        book.id === 4
          ? "bg-linear-to-br from-indigo-700 via-primary to-blue-900"
          : "bg-linear-to-br from-amber-700 via-amber-900 to-stone-900"
      }`}
    >
      {book.icon === "coronavirus" ? (
        <div className="text-[22px]">◉</div>
      ) : (
        <BookOpen className="h-5 w-5" />
      )}

      <span className="mt-1 text-[9px] font-bold uppercase leading-none">
        {book.id === 4 ? "Micro" : "Rome"}
      </span>
    </div>
  );
}

function StatusToggle({
  status,
  onToggle,
}: {
  status: BookStatus;
  onToggle: () => void;
}) {
  const published = status === "Published";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onToggle}
        aria-label={`Toggle ${status}`}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
          published ? "bg-secondary" : "bg-surface-container-high"
        }`}
      >
        <span
          className={`mt-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${
            published ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>

      <span
        className={`text-[13px] font-semibold ${
          published
            ? "text-secondary"
            : status === "In Review"
              ? "text-tertiary"
              : "text-outline"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function BookRow({
  book,
  selected,
  onSelect,
  onToggleStatus,
  onBind,
}: {
  book: Book;
  selected: boolean;
  onSelect: () => void;
  onToggleStatus: () => void;
  onBind: () => void;
}) {
  return (
    <tr
      className={`group border-b border-surface-container-high/40 transition-colors ${
        selected
          ? "bg-primary/5 hover:bg-primary/10"
          : "hover:bg-surface-container-low/60"
      }`}
    >
      <td className="px-4 py-4 text-center">
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          className="h-4 w-4 cursor-pointer rounded text-primary focus:ring-0"
        />
      </td>

      <td className="px-4 py-4">
        <div className="flex min-w-70 items-center gap-3.5">
          <BookCover book={book} />

          <div className="flex min-w-0 flex-col">
            <div className="flex min-w-0 items-center gap-1.5">
              <span className="truncate text-sm font-bold text-on-surface transition-colors group-hover:text-primary">
                {book.title}
              </span>

              {selected && (
                <span className="shrink-0 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-on-primary">
                  Selected
                </span>
              )}
            </div>

            <span className="truncate text-xs text-on-surface-variant">
              {book.subtitle}
            </span>

            <span className="mt-0.5 text-[11px] text-outline">
              ISBN {book.isbn}
            </span>
          </div>
        </div>
      </td>

      <td className="px-4 py-4">
        <div className="flex min-w-38 flex-col">
          <span className="w-fit rounded-full bg-surface-container px-2 py-0.5 text-[13px] font-medium text-on-surface">
            {book.discipline}
          </span>

          <span className="mt-1 text-[11px] text-outline">
            {book.level}
          </span>
        </div>
      </td>

      <td className="px-4 py-4">
        <div className="flex min-w-40 flex-col">
          <span className="text-sm font-semibold text-on-surface">
            {book.author}
          </span>

          <span className="truncate text-[11px] text-on-surface-variant">
            {book.affiliation}
          </span>
        </div>
      </td>

      <td className="px-4 py-4">
        {book.model ? (
          <span
            className={`inline-flex min-w-43 items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold ${
              book.id === 4
                ? "bg-primary/10 text-primary"
                : "bg-secondary-container/25 text-on-secondary-container"
            }`}
          >
            <Box className="h-4 w-4 shrink-0 text-secondary" />
            <span className="truncate">{book.model}</span>
          </span>
        ) : (
          <button
            type="button"
            onClick={onBind}
            className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-3 py-1 text-[13px] font-semibold text-on-tertiary-fixed shadow-sm transition-all hover:bg-tertiary-fixed-dim"
          >
            <Plus className="h-4 w-4" />
            Assign 3D Model
          </button>
        )}
      </td>

      <td className="px-4 py-4">
        <div className="flex min-w-28 flex-col">
          <div className="flex items-center gap-1 text-[13px] font-bold text-on-surface">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {book.rating}
          </div>

          <span className="text-[11px] text-outline">
            {book.reads} reads
          </span>
        </div>
      </td>

      <td className="px-4 py-4">
        <StatusToggle status={book.status} onToggle={onToggleStatus} />
      </td>

      <td className="px-4 py-4 pr-6 text-right">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            title="Edit Metadata"
            className="rounded-lg p-1.5 text-outline transition-all hover:bg-surface-container hover:text-primary"
          >
            <FilePenLine className="h-5 w-5" />
          </button>

          <button
            type="button"
            title="Preview in Reader"
            className="rounded-lg p-1.5 text-outline transition-all hover:bg-surface-container hover:text-secondary"
          >
            <Eye className="h-5 w-5" />
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

function SelectField({
  label,
  value,
  options,
  onChange,
  icon,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-[13px] font-semibold text-outline">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full cursor-pointer appearance-none rounded-lg bg-surface-container px-3 pr-9 text-sm text-on-surface outline-none focus:ring-1 focus:ring-primary"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-outline">
          {icon ?? <ChevronDown className="h-5 w-5" />}
        </span>
      </div>
    </div>
  );
}

function BindingPanel({
  book,
  onClose,
  onConfirm,
}: {
  book: Book;
  onClose: () => void;
  onConfirm: (model: Model) => void;
}) {
  const [searchModel, setSearchModel] = useState("Roman");
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const filteredModels = useMemo(() => {
    return models.filter((model) =>
      model.name.toLowerCase().includes(searchModel.toLowerCase()),
    );
  }, [searchModel]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="relative overflow-hidden rounded-xl border-0 bg-surface-container-lowest p-6 shadow-md">
        <div className="absolute left-0 right-0 top-0 h-1 bg-linear-to-r from-secondary via-primary to-secondary-container" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-surface-container-high/50 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Box className="h-5 w-5 text-secondary" />

              <h2 className="text-sm font-bold uppercase tracking-wider text-on-surface">
                Quick Specimen Binding
              </h2>
            </div>

            <p className="mt-0.5 text-[13px] text-outline">
              Attach WebGL model to selected volume
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-outline transition-all hover:bg-surface-container hover:text-on-surface"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Target book */}
        <div className="my-5 flex items-center gap-3 rounded-xl bg-surface-container-low p-3.5">
          <BookCover book={book} />

          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-bold text-on-surface">
              {book.title}
            </span>

            <span className="text-xs text-on-surface-variant">
              ISBN {book.isbn}
            </span>

            <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary">
              <AlertTriangle className="h-3.5 w-3.5" />
              No 3D specimen bound
            </span>
          </div>
        </div>

        {/* Repository */}
        <div className="mb-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-on-surface">
              Choose from 3D Model Repository
            </label>

            <button
              type="button"
              className="text-[11px] font-normal text-primary hover:underline"
            >
              + Upload GLB
            </button>
          </div>

            <SearchField name="search" aria-label="Search 3D repository...">
                <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input className="w-full" placeholder="Search 3D repository..." />
                <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
          

          <div className="flex max-h-56 flex-col gap-2 overflow-y-auto pr-1">
            {filteredModels.map((model) => {
              const selected = selectedModel.id === model.id;

              return (
                <label
                  key={model.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl p-2.5 transition-all ${
                    selected
                      ? "bg-primary/5"
                      : "hover:bg-surface-container-low"
                  }`}
                >
                  <input
                    type="radio"
                    name="specimen"
                    checked={selected}
                    onChange={() => setSelectedModel(model)}
                    className="mt-1 text-primary focus:ring-0"
                  />

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-bold text-on-surface">
                        {model.name}
                      </span>

                      <span
                        className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                          model.format === "GLB"
                            ? "bg-secondary-container/40 text-on-secondary-container"
                            : "bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        {model.format}
                      </span>
                    </div>

                    <span className="text-[11px] text-outline">
                      {model.metadata}
                    </span>

                    {model.author && (
                      <span className="mt-0.5 text-[11px] font-medium text-secondary">
                        Author: {model.author}
                      </span>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Preview */}
        <div className="mb-5 flex flex-col gap-2.5 rounded-xl bg-surface-container-low p-3.5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-bold uppercase tracking-wider text-on-surface">
              Specimen Pre-Flight
            </span>

            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              WebGL Ready
            </span>
          </div>

          <div className="group relative flex h-32 w-full cursor-grab items-center justify-center overflow-hidden rounded-lg bg-surface-container-high">
            <div className="absolute inset-0 opacity-25">
              <svg
                className="h-full w-full text-primary"
                viewBox="0 0 200 120"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="100"
                  cy="60"
                  r="45"
                  strokeDasharray="3 3"
                />
                <ellipse cx="100" cy="60" rx="45" ry="18" />
                <ellipse cx="100" cy="60" rx="18" ry="45" />
                <line x1="55" y1="60" x2="145" y2="60" />
                <line x1="100" y1="15" x2="100" y2="105" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-1 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest/80 text-primary shadow-sm backdrop-blur">
                <Box className="h-6 w-6" />
              </div>

              <span className="text-[11px] font-semibold text-on-surface">
                {selectedModel.name}
              </span>

              <span className="text-[10px] text-outline">
                Click & drag to orbit test
              </span>
            </div>

            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-surface-container-lowest/90 px-2 py-0.5 text-[10px] font-bold text-on-surface shadow-sm">
              <span>60 FPS</span>
              <span className="text-outline">·</span>
              <span>PBR Lit</span>
            </div>

            <button
              type="button"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-surface-container-lowest/90 text-on-surface shadow-sm transition-colors hover:text-primary"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
            {[
              "AR QuickLook Ready",
              "Mobile Mesh LOD",
              "Annotation Layer (4)",
              "Draco Compressed",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-on-surface-variant"
              >
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            onPress={onClose}
            className="flex-1 rounded-xl bg-surface-container-low text-on-surface"
          >
            Cancel
          </Button>

          <Button
            onPress={() => onConfirm(selectedModel)}
            className="flex-1 rounded-xl bg-primary-container text-on-primary shadow-md"
          >
            <Link2 className="h-5 w-5" />
            Confirm Binding
          </Button>
        </div>
      </Card>

      {/* Compliance */}
      <Card className="flex flex-col gap-3 rounded-xl border-0 bg-surface-container-lowest p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <CircleHelp className="h-5 w-5 text-primary" />

          <span className="text-sm font-bold text-on-surface">
            Curriculum Compliance Note
          </span>
        </div>

        <p className="text-xs leading-relaxed text-on-surface-variant">
          Binding 3D models with &gt;30k polygons to textbooks automatically
          triggers the automated WebGL Draco compression pipeline to preserve
          standard classroom tablet battery life.
        </p>

        <button
          type="button"
          className="flex items-center gap-1 pt-1 text-left text-[13px] font-semibold text-primary hover:underline"
        >
          Read Specimen Optimization Guide
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </Card>
    </div>
  );
}

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState("All Disciplines");
  const [status, setStatus] = useState("All Statuses");
  const [availability, setAvailability] = useState("All 3D Availability");
  const [sortBy, setSortBy] = useState("Recently Updated");

  const [selectedIds, setSelectedIds] = useState<number[]>([5]);
  const [bookList, setBookList] = useState(books);

  const [bindingBookId, setBindingBookId] = useState<number | null>(5);

  const filteredBooks = useMemo(() => {
    let result = [...bookList];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.isbn.toLowerCase().includes(query) ||
          book.discipline.toLowerCase().includes(query),
      );
    }

    if (discipline !== "All Disciplines") {
      result = result.filter((book) => book.discipline === discipline);
    }

    if (status !== "All Statuses") {
      result = result.filter((book) => book.status === status);
    }

    if (availability === "With 3D Specimen") {
      result = result.filter((book) => book.model);
    }

    if (availability === "Missing 3D Specimen") {
      result = result.filter((book) => !book.model);
    }

    if (sortBy === "Title (A - Z)") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "Highest Engagement") {
      result.sort(
        (a, b) =>
          Number(b.reads.replace("k", "")) -
          Number(a.reads.replace("k", "")),
      );
    }

    return result;
  }, [bookList, search, discipline, status, availability, sortBy]);

  const selectedBook =
    bookList.find((book) => book.id === bindingBookId) ?? bookList[4];

  const allVisibleSelected =
    filteredBooks.length > 0 &&
    filteredBooks.every((book) => selectedIds.includes(book.id));

  const toggleSelect = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );

    const book = bookList.find((item) => item.id === id);

    if (book && !book.model) {
      setBindingBookId(id);
    }
  };

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((current) =>
        current.filter((id) => !filteredBooks.some((book) => book.id === id)),
      );
    } else {
      setSelectedIds((current) => [
        ...new Set([...current, ...filteredBooks.map((book) => book.id)]),
      ]);
    }
  };

  const toggleStatus = (id: number) => {
    setBookList((current) =>
      current.map((book) => {
        if (book.id !== id) return book;

        return {
          ...book,
          status: book.status === "Published" ? "Draft" : "Published",
        };
      }),
    );
  };

  const resetFilters = () => {
    setSearch("");
    setDiscipline("All Disciplines");
    setStatus("All Statuses");
    setAvailability("All 3D Availability");
    setSortBy("Recently Updated");
  };

  const confirmBinding = (model: Model) => {
    if (!bindingBookId) return;

    setBookList((current) =>
      current.map((book) =>
        book.id === bindingBookId
          ? {
              ...book,
              model: `${model.name} (${model.format})`,
            }
          : book,
      ),
    );
  };

  return (
    <main className="min-h-screen w-full bg-surface px-4 pb-12 pt-6 text-on-surface sm:px-6 lg:px-8">
      <div className="flex w-full flex-col">
        {/* =====================================================
            TOP COMMAND BAR
        ====================================================== */}
        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[28px] font-bold tracking-tight text-on-surface sm:text-[36px]">
                Books Management & Catalog
              </h1>

              <Chip
                size="sm"
                className="gap-1 bg-primary/10 text-primary"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Live Sync Active
              </Chip>
            </div>

            <p className="mt-1 max-w-3xl text-sm leading-7 text-on-surface-variant">
              Index, author, bind interactive 3D specimens, and manage
              publication lifecycles across 1,482 curriculum textbooks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="rounded-xl bg-surface-container-lowest text-on-surface shadow-sm"
            >
                <SlidersHorizontal className="h-5 w-5 text-outline" />
              Batch Actions
              <ChevronDown className="h-4 w-4 text-outline" />
            </Button>

            <Button
              className="rounded-xl bg-surface-container-lowest text-on-surface shadow-sm"
            >
                <Download className="h-5 w-5 text-outline" />
              Export Catalog (CSV)
            </Button>

            <Button
              className="rounded-xl bg-primary-container text-on-primary shadow-md"
            >
                <Plus className="h-5 w-5" />
              Add New Book
            </Button>
          </div>
        </div>

        {/* =====================================================
            KPI CARDS
        ====================================================== */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Indexed Books"
            value="1,482"
            icon={<BookOpen className="h-5 w-5" />}
            iconClass="bg-surface-container text-primary"
            suffix={
              <span className="inline-flex items-center gap-0.5 text-[13px] font-semibold text-secondary">
                <TrendingUp className="h-3.5 w-3.5" />
                +12.4%
              </span>
            }
            description="vs. last academic term"
            progress={82}
          />

          <StatCard
            label="Live Published"
            value="1,290"
            icon={<BadgeCheck className="h-5 w-5" />}
            iconClass="bg-secondary-container/30 text-secondary"
            suffix={
              <span className="rounded bg-secondary-container/40 px-1.5 py-0.5 text-[13px] font-semibold text-on-secondary-container">
                87% Active
              </span>
            }
            description="Curriculum accredited"
            progress={87}
            progressClass="bg-secondary"
          />

          <StatCard
            label="3D Specimen Bound"
            value="948"
            icon={<Box className="h-5 w-5" />}
            iconClass="bg-primary-fixed text-primary"
            suffix={
              <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[13px] font-semibold text-primary">
                64% Spatial
              </span>
            }
            description="Interactive models"
            progress={64}
            progressClass="bg-surface-tint"
          />

          <StatCard
            label="In Draft / Review"
            value="192"
            icon={<MessageSquareText className="h-5 w-5" />}
            iconClass="bg-tertiary-fixed text-tertiary"
            suffix={
              <span className="inline-flex items-center gap-0.5 text-[13px] font-semibold text-tertiary">
                <Clock3 className="h-3.5 w-3.5" />
                Awaiting Review
              </span>
            }
            description="Peer review queue"
            progress={24}
            progressClass="bg-tertiary"
          />
        </div>

        {/* =====================================================
            MAIN WORKSTATION
        ====================================================== */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
          {/* ===================================================
              LEFT - BOOK TABLE
          ==================================================== */}
          <div className="flex flex-col gap-4 xl:col-span-8">
            {/* Toolbar */}
            <Card className="rounded-xl border-0 bg-surface-container-lowest p-4 shadow-sm">
              {/* Search + view */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <SearchField name="search" aria-label="Search by book title, author, ISBN, or curriculum tag...">
                    <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="flex-1" placeholder="Search by book title, author, ISBN, or curriculum tag..." />
                    <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>

                <div className="flex items-center gap-2 self-end md:self-auto">
                  <div className="flex items-center rounded-xl bg-surface-container-low p-1">
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-lg bg-surface-container-lowest p-2 text-primary shadow-sm"
                    >
                      <Table2 className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      className="flex items-center justify-center rounded-lg p-2 text-outline transition-colors hover:text-on-surface"
                    >
                      <Grid2X2 className="h-5 w-5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl bg-surface-container-low p-2.5 text-on-surface-variant transition-all hover:text-on-surface"
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 gap-3 pt-4 md:grid-cols-4">
                <SelectField
                  label="Discipline"
                  value={discipline}
                  options={disciplines}
                  onChange={setDiscipline}
                />

                <SelectField
                  label="Status"
                  value={status}
                  options={statuses}
                  onChange={setStatus}
                />

                <SelectField
                  label="3D Specimen"
                  value={availability}
                  options={[
                    "All 3D Availability",
                    "With 3D Specimen",
                    "Missing 3D Specimen",
                  ]}
                  onChange={setAvailability}
                />

                <SelectField
                  label="Sort By"
                  value={sortBy}
                  options={[
                    "Recently Updated",
                    "Highest Engagement",
                    "Title (A - Z)",
                    "Newest Release",
                  ]}
                  onChange={setSortBy}
                  icon={<SortAsc className="h-5 w-5" />}
                />
              </div>

              {/* Active filters */}
              <div className="flex flex-wrap items-center gap-2 pt-3">
                <span className="mr-1 text-[13px] font-semibold text-outline">
                  Active Filters:
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-2.5 py-1 text-[13px] text-on-surface">
                  Term: Fall 2024
                  <X className="h-3.5 w-3.5 cursor-pointer hover:text-error" />
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-2.5 py-1 text-[13px] text-on-surface">
                  All Formats (WebGL / USDZ)
                  <X className="h-3.5 w-3.5 cursor-pointer hover:text-error" />
                </span>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="ml-auto text-[13px] font-semibold text-primary hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            </Card>

            {/* Table */}
            <Card className="overflow-hidden rounded-xl border-0 bg-surface-container-lowest shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-surface-container-low text-[13px] font-semibold text-on-surface-variant">
                      <th className="w-12 px-4 py-3.5 text-center">
                        <input
                          type="checkbox"
                          checked={allVisibleSelected}
                          onChange={toggleSelectAll}
                          className="h-4 w-4 cursor-pointer rounded text-primary focus:ring-0"
                        />
                      </th>

                      <th className="min-w-70 px-4 py-3.5">
                        Book & Details
                      </th>

                      <th className="min-w-40 px-4 py-3.5">
                        Discipline
                      </th>

                      <th className="min-w-43 px-4 py-3.5">
                        Author / Affiliation
                      </th>

                      <th className="min-w-48 px-4 py-3.5">
                        Linked 3D Specimen
                      </th>

                      <th className="min-w-33 px-4 py-3.5">
                        Reads / Rating
                      </th>

                      <th className="min-w-30 px-4 py-3.5">
                        Status
                      </th>

                      <th className="w-28 px-4 py-3.5 pr-6 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredBooks.map((book) => (
                      <BookRow
                        key={book.id}
                        book={book}
                        selected={selectedIds.includes(book.id)}
                        onSelect={() => toggleSelect(book.id)}
                        onToggleStatus={() => toggleStatus(book.id)}
                        onBind={() => {
                          setBindingBookId(book.id);
                          setSelectedIds((current) =>
                            current.includes(book.id)
                              ? current
                              : [...current, book.id],
                          );
                        }}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Empty */}
              {filteredBooks.length === 0 && (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container">
                    <Search className="h-5 w-5 text-outline" />
                  </div>

                  <h3 className="font-semibold text-on-surface">
                    No books found
                  </h3>

                  <p className="mt-1 text-sm text-on-surface-variant">
                    Try changing your search or filters.
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="flex flex-col items-center justify-between gap-4 bg-surface-container-low/40 p-4 md:flex-row">
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <span className="text-[13px] font-medium text-on-surface-variant">
                    <strong className="font-bold text-primary">
                      {selectedIds.length}
                    </strong>{" "}
                    of 1,482 books selected
                  </span>

                  <div className="hidden h-4 w-px bg-outline-variant/50 sm:block" />

                  <div className="flex flex-wrap items-center gap-1.5">
                    <button className="rounded-lg bg-surface-container-lowest px-2.5 py-1 text-[13px] font-semibold text-on-surface transition-all hover:bg-surface-container">
                      Publish
                    </button>

                    <button className="rounded-lg bg-surface-container-lowest px-2.5 py-1 text-[13px] font-semibold text-on-surface transition-all hover:bg-surface-container">
                      Export Selected
                    </button>

                    <button className="rounded-lg bg-surface-container-lowest px-2.5 py-1 text-[13px] font-semibold text-error transition-all hover:bg-error-container">
                      Archive
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm">
                  <button className="flex items-center gap-1 rounded-lg bg-surface-container-lowest px-3 py-1.5 text-outline transition-all hover:bg-surface-container hover:text-on-surface">
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-semibold text-on-primary shadow-sm">
                    1
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface transition-all hover:bg-surface-container">
                    2
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface transition-all hover:bg-surface-container">
                    3
                  </button>

                  <span className="px-1 text-outline">...</span>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface transition-all hover:bg-surface-container">
                    297
                  </button>

                  <button className="flex items-center gap-1 rounded-lg bg-surface-container-lowest px-3 py-1.5 text-on-surface transition-all hover:bg-surface-container">
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* ===================================================
              RIGHT - QUICK BINDING
          ==================================================== */}
          <div className="xl:col-span-4">
            {selectedBook ? (
              <BindingPanel
                book={selectedBook}
                onClose={() => setBindingBookId(null)}
                onConfirm={confirmBinding}
              />
            ) : (
              <Card className="rounded-xl border-0 bg-surface-container-lowest p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-container">
                  <Box className="h-6 w-6 text-outline" />
                </div>

                <h3 className="mt-4 font-semibold text-on-surface">
                  No book selected
                </h3>

                <p className="mt-1 text-sm text-on-surface-variant">
                  Select a book to manage its 3D specimen binding.
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}