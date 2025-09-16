declare module "lucide-react" {
  import { ComponentType, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const Home: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Target: LucideIcon;
  export const Key: LucideIcon;
  export const User: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Settings: LucideIcon;
  export const X: LucideIcon;
  export const LogOut: LucideIcon;
  export const Menu: LucideIcon;
  export const Bell: LucideIcon;
  export const Plus: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const Eye: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Calendar: LucideIcon;
  export const Filter: LucideIcon;
  export const SortAsc: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Copy: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Trash2: LucideIcon;
}
