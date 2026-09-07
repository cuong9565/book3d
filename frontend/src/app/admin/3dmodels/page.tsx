"use client";

import { useMemo, useState, ComponentType } from "react";
import {
  Activity,
  Archive,
  ArrowLeft,
  ArrowRight,
  Box,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CloudUpload,
  Database,
  Eye,
  FileBox,
  Filter,
  Grid2X2,
  Layers3,
  MoreVertical,
  PackageOpen,
  Pencil,
  Play,
  Plus,
  Rotate3D,
  Search,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  Upload,
  Volume2,
  X,
} from "lucide-react";

import {
  Button,
  Card,
  Chip,
  Input,
  Label,
  SearchField
} from "@heroui/react";

interface ModelItem {
  id: string;
  title: string;
  discipline: string;
  format: string;
  status: string;
  image: string;
  liveBooks: number;
  fps: string;
  meshId: string;
  feature: string;
  tris: string;
  attribute: string;
  size: string;
  optimization: string;
  textbook: string;
  moreBooks: number;
}

const models: ModelItem[] = [
  {
    id: "MOR-980",
    title: "T-Rex Cranium Fossil Specimen",
    discipline: "Paleontology & Prehistoric Life",
    format: "GLB",
    status: "Live",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmwfTDvS2RRUgDz-pFGeCQ-Qs_0v26sUD3lFezTWDTLjT1BOxCkb-prHczUvHzf_Nt2dr4uA2ebm30tcfnBrVXTvn5ouNulcYYnfrg1McsVehh5Oi4kB-Hdmlu_QGNhvKBVuSRa67hw-bTPMbZcQ528dc58ZJz-mv5Fbytwki2C-LlwqUWoAN1YcEbVUvTX1SwQBi3qz5fd2CDlNqfPxXenTloS39p_NlnjehY-cFbYjKALp2qqeoGg",
    liveBooks: 14,
    fps: "60 FPS • WebGL 2.0",
    meshId: "MOR-980",
    feature: "Orbit / Wireframe",
    tris: "48.2k Tris",
    attribute: "PBR Metallic",
    size: "18.4 MB",
    optimization: "3 LOD Levels",
    textbook: "Dinosaur World: Mesozoic",
    moreBooks: 3,
  },
  {
    id: "ANAT-CARD-04",
    title: "Cardiovascular 4-Chamber Heart",
    discipline: "Human Anatomy & Physiology",
    format: "GLTF 2.0",
    status: "Live",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKZfVJLfpQQaObzzAmyNJ8GLoQZpmcPqv20PpkddVQNW62i2kmj-Kqo4kaLBHifKQiHZXhz_r9CKtW8uYY449thvJ23wv8d7nUmw7f8NJvBzk-aONg1pgkca_LDvtn_c6JR4fac7DCM3QdxRu8Us_Dbhak2scuReepT8751maSv60NxCy2nwX1JrcQLAP5IfyFgS_AEC8mBP2z7VjXM9Y06JSqTvBuPmUbqJc6MPokbxHB2-ERp0y1EA",
    liveBooks: 28,
    fps: "Audio Sync • 60 FPS",
    meshId: "ANAT-CARD-04",
    feature: "Interactive Dissection",
    tris: "62.1k Tris",
    attribute: "Sagittal Cutaway",
    size: "24.1 MB",
    optimization: "Pulse Sound FX",
    textbook: "Cardiovascular Architecture",
    moreBooks: 7,
  },
  {
    id: "JWST-NASA-01",
    title: "James Webb Space Telescope (JWST)",
    discipline: "Astrophysics & Deep Space",
    format: "USDZ / GLB",
    status: "Live",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgHkXyYMotEvz9B8kxSQfZMICrKa7x9iSRepE-abKqXLbQMC1fLidvEZ7UiB_G7aa_VeBd3IWfb8Bb2bI8xxLXSOy1VFHnhOgWyxP4SIpLRmI-goomHRoYwrsJZMAJzl9ZJkS8Pf4IagA2oS2QQ-wAInAul11I_jx6JKOUgUE4dhe4fZCIyzNpw40LxaziOdpe_5RsQiHLNyeZxU_KMTj3JADwgjVPQ3l3mtEE1hZCfzZrADFhFJTbGA",
    liveBooks: 9,
    fps: "1:1 Scale CAD",
    meshId: "JWST-NASA-01",
    feature: "8 Hotspots",
    tris: "74.5k Tris",
    attribute: "5-Layer Sunshield",
    size: "32.0 MB",
    optimization: "Kinematic Rig",
    textbook: "Orbital Mechanics & Deep Space",
    moreBooks: 1,
  },
  {
    id: "BACT-T4-VIR",
    title: "T4 Bacteriophage Viral Structure",
    discipline: "Microbiology & Virology",
    format: "GLB",
    status: "Live",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSq-ecL1hIHbxUMQ-4XCP3HN8FIwlYBn6Ys3gN1Y1ChLMpBp5H8GLADKWJsLMNcNqUloY_gI7nPAgy6tOkVy9IgdZclo1pKuBAWSaMxv8g1PaI_pyi0N1DC4-56TnR7Nt8XQzHOWjuiBVN4frnWPc_QBOWEmEF2kuRkri-HuHQZXihocksEHAtuaZ9svnpNT4podCXInur4eICpYYLruKs8KT0DokG_nhHbawa7MkujxnEtbB-lfYYnw",
    liveBooks: 16,
    fps: "Cryo-EM Map",
    meshId: "BACT-T4-VIR",
    feature: "Ultra-Lightweight",
    tris: "14.8k Tris",
    attribute: "Icosahedral Head",
    size: "8.2 MB",
    optimization: "Mobile Ready",
    textbook: "Microbial Worlds & Cells",
    moreBooks: 5,
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

const formats = [
  "All Formats",
  "GLB",
  "GLTF 2.0",
  "USDZ",
  "OBJ / MTL",
];

const statuses = [
  "All Statuses",
  "Active & Live",
  "Processing Mesh",
  "Optimization Needed",
];

function StatCard({
  label,
  value,
  suffix,
  description,
  icon: Icon,
  iconClass,
}: {
  label: string;
  value: string;
  suffix?: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  iconClass: string;
}) {
  return (
    <Card className="border-none bg-white shadow-sm rounded-2xl">
      <div className="p-5 flex items-center justify-between gap-4">
        <div className="space-y-1 min-w-0">
          <p className="text-[12px] font-medium text-on-surface-variant">
            {label}
          </p>

          <p className="text-2xl font-bold text-[#131b2e]">
            {value}
            {suffix && (
              <span className="ml-1 text-sm font-normal text-outline">
                {suffix}
              </span>
            )}
          </p>

          <p className="flex items-center gap-1 text-[11px] font-semibold text-secondary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {description}
          </p>
        </div>

        <div
          className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ${iconClass}`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}

function ModelCard({ model }: { model: ModelItem }) {
  return (
    <Card className="group overflow-hidden border-none bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
      {/* Preview */}
      <div className="relative h-56 w-full overflow-hidden bg-inverse-surface">
        <img
          src={model.image}
          alt={model.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          <span className="rounded-md bg-inverse-surface/85 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {model.format}
          </span>

          <span className="flex items-center gap-1 rounded-md bg-secondary/90 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Live in {model.liveBooks} Books
          </span>
        </div>

        {/* FPS */}
        <div className="absolute right-3 top-3 rounded bg-inverse-surface/75 px-2 py-1 text-[10px] font-mono text-white backdrop-blur-sm">
          {model.fps}
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-lg bg-inverse-surface/80 px-2 py-1.5 text-[10px] backdrop-blur-sm">
          <span className="flex items-center gap-1 font-mono text-secondary-container">
            <Box className="h-3 w-3" />
            {model.meshId}
          </span>

          <span className="flex items-center gap-1 text-outline-variant">
            <Rotate3D className="h-3 w-3" />
            {model.feature}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div className="space-y-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-secondary">
              {model.discipline}
            </p>

            <h3 className="mt-1 line-clamp-1 text-lg font-bold text-[#131b2e] transition-colors group-hover:text-primary">
              {model.title}
            </h3>
          </div>

          {/* Technical attributes */}
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-surface-container-low p-3 text-[12px]">
            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <Layers3 className="h-3.5 w-3.5 text-primary" />
              {model.tris}
            </div>

            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <Settings2 className="h-3.5 w-3.5 text-primary" />
              <span className="truncate">{model.attribute}</span>
            </div>

            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <FileBox className="h-3.5 w-3.5 text-primary" />
              {model.size}
            </div>

            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              <span className="truncate">{model.optimization}</span>
            </div>
          </div>

          {/* Textbooks */}
          <div>
            <p className="mb-1 text-[11px] text-on-surface-variant">
              Bound Textbooks:
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="max-w-43 truncate rounded-md bg-surface-container px-2 py-1 text-[11px] text-[#131b2e]">
                {model.textbook}
              </span>

              {model.moreBooks > 0 && (
                <span className="rounded-md bg-surface-container px-2 py-1 text-[11px] font-bold text-primary">
                  +{model.moreBooks} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 border-t border-surface-contabg-surface-container pt-4">
          <Button
            className="flex-1 bg-primary text-white font-semibold"
            size="sm"
          >
            <Eye className="h-4 w-4" />
            Preview 3D
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            className="bg-surface-container text-on-surface-variant"
            aria-label="Inspect mesh"
          >
            <Activity className="h-4 w-4" />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            className="bg-surface-container text-on-surface-variant"
            aria-label="More options"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

function UploadDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-surface-container-low p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Upload className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#131b2e]">
                Upload 3D Specimen
              </h2>

              <p className="text-[12px] text-on-surface-variant">
                GLTF, GLB, OBJ, USDZ up to 100MB
              </p>
            </div>
          </div>

          <Button
            isIconOnly
            variant="ghost"
            onPress={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-6 overflow-y-auto p-5">
          {/* Dropzone */}
          <div className="cursor-pointer rounded-2xl bg-surface-container-low/60 p-8 text-center transition-colors hover:bg-surface-container-low">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
              <Box className="h-8 w-8" />
            </div>

            <p className="text-sm font-bold text-[#131b2e]">
              Drag & drop your 3D asset file
            </p>

            <p className="mt-1 text-[12px] text-on-surface-variant">
              or browse your workstation files
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {[".GLB", ".GLTF 2.0", ".USDZ", ".OBJ"].map((item) => (
                <span
                  key={item}
                  className="rounded bg-surface-container px-2 py-1 text-[10px] font-semibold uppercase text-on-surface-variant"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
                <Label htmlFor="model-specimen-title">Model Specimen Title</Label>
                <Input id="model-specimen-title" aria-label="model-specimen-title" placeholder="e.g., Human Respiratory Diaphragm" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#131b2e]">
                  Discipline
                </label>

                <select className="h-10 w-full rounded-xl bg-surface-container-low px-3 text-sm text-[#131b2e] outline-none focus:ring-2 focus:ring-primabg-primary/30">
                  <option>Human Anatomy</option>
                  <option>Paleontology</option>
                  <option>Astrophysics</option>
                  <option>Microbiology</option>
                </select>
              </div>

                <div className="flex flex-col gap-1">
                    <Label htmlFor="scientific-id">Scientific ID</Label>
                    <Input id="scientific-id" aria-label="scientific-id" placeholder="ANAT-LUNG-08" />
                </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#131b2e]">
                Target Textbook Binding
              </label>

              <select className="h-10 w-full rounded-xl bg-surface-container-low px-3 text-sm text-[#131b2e] outline-none focus:ring-2 focus:ring-primabg-primary/30">
                <option>
                  Clinical Pulmonology & Physiology (Vol. 3)
                </option>
                <option>Dinosaur World: Mesozoic Era</option>
                <option>Orbital Mechanics & Deep Space</option>
                <option>Microbial Worlds & Cells</option>
              </select>
            </div>
          </div>

          {/* Auto processing */}
          <div className="space-y-3 rounded-xl bg-surface-container-low p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#131b2e]">
              Auto-Processing Pipeline
            </p>

            {[
              "Auto-generate Multi-tier LODs (WebGL)",
              "Compress Textures to KTX2 / Basis Universal",
              "Generate AR QuickLook USDZ variant",
            ].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center justify-between gap-3"
              >
                <span className="text-sm text-[#131b2e]">{item}</span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-primabg-primary"
                />
              </label>
            ))}
          </div>

          {/* Validation */}
          <div className="space-y-2 rounded-xl bg-secondary/10 p-4">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-secondary">
              Pre-Flight Engine Checks
            </p>

            {[
              "Mesh manifold topology valid",
              "PBR metallic-roughness workflow parsed",
              "WebGL 2.0 compatibility verified",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#131b2e]"
              >
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-surface-contabg-surface-container bg-white p-5">
          <Button
            className="flex-1"
            variant="ghost"
            onPress={onClose}
          >
            Cancel
          </Button>

          <Button
            className="flex-1 bg-primary text-white font-semibold"
          >
            <CloudUpload className="h-4 w-4" />
            Upload & Process
          </Button>
        </div>
      </aside>
    </>
  );
}

export default function ThreeDModelsPage() {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState("All Disciplines");
  const [format, setFormat] = useState("All Formats");
  const [status, setStatus] = useState("All Statuses");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredModels = useMemo(() => {
    return models.filter((model) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        !keyword ||
        model.title.toLowerCase().includes(keyword) ||
        model.meshId.toLowerCase().includes(keyword) ||
        model.discipline.toLowerCase().includes(keyword);

      const matchesDiscipline =
        discipline === "All Disciplines" ||
        model.discipline.toLowerCase().includes(discipline.toLowerCase());

      const matchesFormat =
        format === "All Formats" ||
        model.format.toLowerCase().includes(format.toLowerCase());

      const matchesStatus =
        status === "All Statuses" ||
        (status === "Active & Live" && model.status === "Live");

      return (
        matchesSearch &&
        matchesDiscipline &&
        matchesFormat &&
        matchesStatus
      );
    });
  }, [search, discipline, format, status]);

  return (
    <div className="min-h-full bg-[#faf8ff] p-4 sm:p-5 lg:p-6">
      <div className="space-y-5">
        {/* Page Header */}
        <section className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-[#131b2e] sm:text-3xl">
                3D Asset Management & Studio
              </h1>

              <Chip
                size="sm"
                variant="primary"
                className="bg-primary/10 text-primary"
              >
                Production v2.4
              </Chip>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-on-surface-variant">
              Manage, optimize, inspect, and bind WebGL 2.0 / GLTF 3D
              educational specimens across the interactive curriculum catalog.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
            <Button
              variant="ghost"
              className="bg-surface-container font-semibold text-[#131b2e]"
            >
                <Sparkles className="h-4 w-4" />
              Batch Optimization
            </Button>

            <Button
              className="bg-primary font-semibold text-white shadow-md"
              onPress={() => setDrawerOpen(true)}
            >
                <Upload className="h-4 w-4" />
              + Upload 3D Model
            </Button>
          </div>
        </section>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total 3D Models"
            value="524"
            description="+18.2% this quarter"
            icon={Box}
            iconClass="bg-primary/10 text-primary"
          />

          <StatCard
            label="Avg Polygon Density"
            value="42.6k"
            suffix="Tris"
            description="Adaptive LOD Ready"
            icon={Layers3}
            iconClass="bg-secondary/10 text-secondary"
          />

          <StatCard
            label="Total Storage Used"
            value="4.82"
            suffix="GB"
            description="KTX2 & Draco compressed"
            icon={Database}
            iconClass="bg-[#ffddb8] text-[#784b00]"
          />

          <StatCard
            label="Active Book Embeds"
            value="418"
            description="79.7% utilization"
            icon={Archive}
            iconClass="bg-surface-container text-primary"
          />
        </div>

        {/* Toolbar */}
        <section className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap">

            <SearchField name="search" aria-label="Search by model title, mesh ID, scientific name...">
                <SearchField.Group>
                    <SearchField.SearchIcon />
                        <SearchField.Input className="min-w-0 flex-1" placeholder="Search by model title, mesh ID, scientific name..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
              

              <select
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                className="h-10 rounded-xl bg-surface-container-low px-3 text-sm text-[#131b2e] outline-none focus:ring-2 focus:ring-primabg-primary/30"
              >
                {disciplines.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="h-10 rounded-xl bg-surface-container-low px-3 text-sm text-[#131b2e] outline-none focus:ring-2 focus:ring-primabg-primary/30"
              >
                {formats.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-10 rounded-xl bg-surface-container-low px-3 text-sm text-[#131b2e] outline-none focus:ring-2 focus:ring-primabg-primary/30"
              >
                {statuses.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between gap-3 xl:justify-end">
              <span className="whitespace-nowrap text-[12px] text-on-surface-variant">
                Showing{" "}
                <strong className="text-[#131b2e]">
                  {filteredModels.length}
                </strong>{" "}
                of 524 models
              </span>

              <div className="flex rounded-xl bg-surface-container-low p-1">
                <Button
                  isIconOnly
                  size="sm"
                  className="bg-white text-primary shadow-sm"
                  aria-label="Grid view"
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>

                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  className="text-outline"
                  aria-label="List view"
                >
                  <PackageOpen className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {filteredModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        ) : (
          <Card className="border-none bg-white p-10 text-center shadow-sm">
            <Search className="mx-auto h-10 w-10 text-outline" />

            <h3 className="mt-3 text-lg font-bold text-[#131b2e]">
              No 3D models found
            </h3>

            <p className="mt-1 text-sm text-outline">
              Try changing your search keyword or filters.
            </p>
          </Card>
        )}

        {/* Pagination */}
        <section className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-white p-3 shadow-sm sm:flex-row">
          <p className="text-[13px] text-on-surface-variant">
            Showing{" "}
            <strong className="text-[#131b2e]">
              {filteredModels.length > 0 ? "1–4" : "0"}
            </strong>{" "}
            of <strong className="text-[#131b2e]">524</strong>{" "}
            educational models
          </p>

          <div className="flex items-center gap-1.5">
            <Button
              isIconOnly
              size="sm"
              variant="ghost"
              className="bg-surface-container-low text-outline"
              isDisabled={page === 1}
              onPress={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {[1, 2, 3].map((item) => (
              <Button
                key={item}
                size="sm"
                className={
                  page === item
                    ? "bg-primary text-white font-bold"
                    : "bg-surface-container-low text-[#131b2e]"
                }
                onPress={() => setPage(item)}
              >
                {item}
              </Button>
            ))}

            <span className="px-1 text-outline">...</span>

            <Button
              size="sm"
              className="bg-surface-container-low text-[#131b2e]"
              onPress={() => setPage(44)}
            >
              44
            </Button>

            <Button
              isIconOnly
              size="sm"
              variant="ghost"
              className="bg-surface-container-low text-outline"
              onPress={() => setPage((p) => Math.min(44, p + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>

      {/* Upload Drawer */}
      <UploadDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}