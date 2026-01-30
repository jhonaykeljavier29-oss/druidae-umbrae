import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  guildName = 'Druidae Umbrae';
  guildTagline = 'Guerreros de la Naturaleza y la Sombra  ';
  menuOpen = false;
  discordLink = 'https://discord.gg/druidaeumbrae';
  
  stats = [
    { icon: 'fas fa-shield-alt', count: 31, label: 'Miembros Activos' },
    { icon: 'fas fa-calendar-alt', count: 7, label: 'Eventos por Semana' },
    { icon: 'fas fa-trophy', count: 3, label: 'Castillos Conquistados' },
    { icon: 'fas fa-crown', count: 0, label: 'Territorios' }
  ];

  rules = [
    { icon: 'fas fa-handshake', title: 'Respeto Mutuo', description: 'Trata a todos los miembros con respeto, sin importar su nivel, experiencia o nacionalidad.' },
    { icon: 'fas fa-comments', title: 'Comunicación Activa', description: 'Usa Discord para coordinar actividades. La comunicación es clave para el éxito en Albion.' },
    { icon: 'fas fa-users', title: 'Participación', description: 'Participa en al menos 2 eventos de gremio por semana. La actividad mantiene vivo al gremio.' },
    { icon: 'fas fa-shield-alt', title: 'Lealtad', description: 'No dañes intencionalmente a otros miembros del gremio, ni dentro ni fuera del juego.' },
    { icon: 'fas fa-gem', title: 'Contribución', description: 'Contribuye al banco del gremio según tus posibilidades. Todos ayudamos, todos ganamos.' },
    { icon: 'fas fa-gamepad', title: 'Diversión', description: 'Recuerda que esto es un juego. Diviértete, ayuda a otros y disfruta de la aventura.' }
  ];

  events = [
    { day: 'Lunes', title: 'Farming en Tierras Negras', time: '20:00 - 22:00 (CEST)', description: 'Recolección grupal de recursos en zonas de alto nivel.' },
    { day: 'Martes', title: 'Entrenamiento PvP', time: '19:00 - 21:00 (CEST)', description: 'Práctica de combate y estrategias para nuevos miembros.' },
    { day: 'Miércoles', title: 'ZvZ Territorial', time: '21:00 - 23:00 (CEST)', description: 'Batallas por el control de territorios y castillos.' },
    { day: 'Jueves', title: 'Expedición de Dungeons', time: '20:00 - 22:00 (CEST)', description: 'Grupos organizados para dungeons en zonas rojas.' },
    { day: 'Viernes', title: 'GvG de Práctica', time: '19:00 - 21:00 (CEST)', description: 'Preparación para las batallas de gremio del fin de semana.' },
    { day: 'Sábado', title: 'GvG Oficial', time: '20:00 - 23:00 (CEST)', description: 'Batallas oficiales por territorios y castillos.' },
    { day: 'Domingo', title: 'Evento Social', time: '18:00 - 20:00 (CEST)', description: 'Actividades recreativas y torneos amistosos.' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.menuOpen = false;
    }
  }

  copyDiscordLink() {
    navigator.clipboard.writeText(this.discordLink).then(() => {
      alert('¡Enlace de Discord copiado al portapapeles!');
    });
  }

  openAlbionWebsite() {
    window.open('https://albiononline.com', '_blank');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.guild-header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}