
import { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";

interface Certification {
  name: string;
  icon: string;
  color: string;
}

interface FarmerBadgeProps {
  name: string;
  farm: string;
  avatar?: string;
  className?: string;
  certifications?: Certification[];
  showCertifications?: boolean;
}

const FarmerBadge: FC<FarmerBadgeProps> = ({ 
  name, 
  farm, 
  avatar, 
  className,
  certifications = [],
  showCertifications = false
}) => {
  // Función para renderizar el icono dinámicamente
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-3 w-3 mr-1" /> : null;
  };
  
  return (
    <div className={cn("farmer-badge flex flex-col", className)}>
      <div className="flex items-center gap-2">
        <Avatar className="h-5 w-5">
          <AvatarFallback className="bg-accent/50 text-[10px]">
            {avatar || name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <span title={`Producto de ${name} - ${farm}`}>De {farm}</span>
      </div>
      
      {showCertifications && certifications && certifications.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {certifications.map((cert, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-[10px] px-1 py-0 h-5 flex items-center" 
              style={{ borderColor: cert.color, color: cert.color }}
            >
              {renderIcon(cert.icon)}
              {cert.name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerBadge;
