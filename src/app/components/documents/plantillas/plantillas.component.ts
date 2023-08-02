import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentModel } from 'src/app/models/document.model'; 
import { FileService } from 'src/app/services/file.service';
import { MatSort } from '@angular/material/sort';
import { DocumentosServicios_generales } from '../manaules-guias/manaules-guias.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort !: MatSort;
  
  // mostrar_columnas: string[] = ['fecha', 'area', 'nombre', 'url', 'download' ];
  mostrar_columnas: string[] = ['fecha', 'area', 'nombre', 'download' ];

  datosAuditoria = new MatTableDataSource<DocumentosAuditoria>(documentosAuditoria);
  datosCalidad = new MatTableDataSource<DocumentosCalidad>(documentosCalidad);
  datosGerenciaAdministrativa = new MatTableDataSource<DocumentosGerenciaAdministrativa>(documentosGerenciaAdministrativa);
  datosMantenimiento = new MatTableDataSource<DocumentosMantenimiento>(documentosMantenimiento);
  datosServiciosGenerales = new MatTableDataSource<DocumentosServicios_generales>(documentosServiciosGenerales);
  datosComercial = new MatTableDataSource<DocumentosComercial>(documentosComercial);
  datosContabilidad = new MatTableDataSource<DocumentosContabilidad>(documentosContabilidad);
  datosImportaciones = new MatTableDataSource<DocumentosImportaciones>(documentosImportaciones);
  datosSig = new MatTableDataSource<DocumentosSig>(documentosSig);
  datosTalento_Humano = new MatTableDataSource<DocumentosTalento_Humano>(documentosTalento_Humano);
  datosTesoreria = new MatTableDataSource<DocumentosTesoreria>(documentosTesoreria);
  datosTi = new MatTableDataSource<DocumentosTi>(documentosTi);

  tablaSeleccionada: MatTableDataSource<any> = this.datosContabilidad;
  documento: DocumentModel = new DocumentModel ();
  // loading: boolean = false;
  // fechaInicio !: any;
  // fechaFin !: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: FileService, private http : HttpClient) {}

  ngOnInit() {
    this.tablaSeleccionada = this.datosCalidad;
    this.service.getDocumentosPorAreaFormatos('calidad').subscribe((documentos: DocumentosCalidad[]) => {
      this.tablaSeleccionada.data= documentos;
      this.datosCalidad.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.datosAuditoria.paginator = this.paginator;
    this.datosCalidad.paginator = this.paginator;
    this.datosComercial.paginator = this.paginator;
    this.datosContabilidad.paginator = this.paginator;
    this.datosImportaciones.paginator = this.paginator;
    this.datosSig.paginator = this.paginator;
    this.datosTalento_Humano.paginator = this.paginator;
    this.datosTesoreria.paginator = this.paginator;
    this.datosTi.paginator = this.paginator;
  }
             
  onChange(event: any) {
    switch (event.value) {
      case 'auditoria':
        this.tablaSeleccionada = this.datosAuditoria;
        this.service.getDocumentosPorAreaFormatos('auditoria').subscribe((documentos: DocumentosAuditoria[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
        case 'calidad':
        this.tablaSeleccionada = this.datosCalidad;
        this.service.getDocumentosPorAreaFormatos('calidad').subscribe((documentos: DocumentosCalidad[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
        case 'gerencia_administrativa':
        this.tablaSeleccionada = this.datosGerenciaAdministrativa;
        this.service.getDocumentosPorAreaFormatos('gerencia_administrativa').subscribe((documentos: DocumentosGerenciaAdministrativa[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
        case 'mantenimiento':
        this.tablaSeleccionada = this.datosMantenimiento;
        this.service.getDocumentosPorAreaFormatos('mantenimiento').subscribe((documentos: DocumentosMantenimiento[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
        case 'servicios_generales':
        this.tablaSeleccionada = this.datosCalidad;
        this.service.getDocumentosPorAreaFormatos('servicios_generales').subscribe((documentos: DocumentosServicios_generales[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
        case 'comercial':
        this.tablaSeleccionada = this.datosComercial;
        this.service.getDocumentosPorAreaFormatos('comercial').subscribe((documentos: DocumentosComercial[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
      case 'contabilidad':
        this.tablaSeleccionada = this.datosContabilidad;
        this.service.getDocumentosPorAreaFormatos('contabilidad').subscribe((documentos: DocumentosContabilidad[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
      case 'importaciones': 
        this.tablaSeleccionada = this.datosImportaciones;
        this.service.getDocumentosPorAreaFormatos('importaciones').subscribe((documentos: DocumentosImportaciones[]) => {
          this.tablaSeleccionada.data= documentos;
        });
  
        break;
      case 'sig':
        this.tablaSeleccionada = this.datosSig;
        this.service.getDocumentosPorAreaFormatos('sig').subscribe((documentos: DocumentosSig[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
      case 'talento_humano':
        this.tablaSeleccionada = this.datosTalento_Humano;
        this.service.getDocumentosPorAreaFormatos('talento_humano').subscribe((documentos: DocumentosTalento_Humano[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break;
        case 'tesoreria':
          this.tablaSeleccionada = this.datosTesoreria;
          this.service.getDocumentosPorAreaFormatos('tesoreria').subscribe((documentos: DocumentosTesoreria[]) => {
            this.tablaSeleccionada.data= documentos;
          });
          break;
          case 'ti':
            this.tablaSeleccionada = this.datosTi;
            this.service.getDocumentosPorAreaFormatos('ti').subscribe((documentos: DocumentosTi[]) => {
              this.tablaSeleccionada.data= documentos;
            });
            break;
   /*    default:
        this.tablaSeleccionada = this.datosTH;
        this.service.getDocumentosPorArea('talento humano').subscribe((documentos: DocumentosTH[]) => {
          this.tablaSeleccionada.data= documentos;
        });
        break; */
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.tablaSeleccionada.filterPredicate = (data: any, filter: string) => data.nombre.trim().toLowerCase().indexOf(filter) !== -1;
    this.tablaSeleccionada.filter = filterValue;
    if (!filterValue) {
      this.tablaSeleccionada.filter = '';
    }
  }
  
  enviarInfo(form: NgForm){
    if(form.valid) {
      const documento: DocumentModel = {
        // id: form.value.id,
        nombre: form.value.nombre,
        fecha: form.value.fecha,
        area: form.value.area,
        url: form.value.url
      };
      this.service.addFormatos(documento).subscribe({
        next: (data:any)=>{
          console.log("informacion guardada en la base de datos");
        },
        error:(e)=> console.log("Error en el envio a la BD", e)
      });
    }
  }
  
  downloadFile(url: string, nombre: string): void {
    this.service.getNombreFormatos(nombre).subscribe((documento: any) => {
      const nombreArchivo = documento[0].nombre;
      const urlArchivo = documento[0].url;
      console.log('Data Api :',documento);
      const urlParticionada = urlArchivo.substring(urlArchivo.indexOf("/formatos"));
      
      const extension = urlArchivo.substring(urlArchivo.lastIndexOf('.') + 1);
      const nombreCompleto = `${nombreArchivo}.${extension}`;

      const urlNas = 'http://172.16.1.24:88';

      this.http.get(`${urlNas}${urlParticionada}`, { responseType: 'blob' }).subscribe((archivo: any) => {
        const blob = new Blob([archivo]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = nombreCompleto;
        link.click();
      }, (error: any) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error extensión CORS',
          text: 'Ocurrió un error al descargar el archivo, por favor revisa la configuración de la extensión.',
          showConfirmButton: true,
          confirmButtonText: 'Entendido'
        });
      });
    });
  }
  
  ajustarAnchoInput(event: any) {
    const input = event.target;
    input.style.width = input.value.length + 'ch';
  }
} 

export interface DocumentosAuditoria{
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosAuditoria: DocumentosAuditoria[] = [];

export interface DocumentosCalidad{
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosCalidad: DocumentosCalidad[] = [];

export interface DocumentosGerenciaAdministrativa{
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosGerenciaAdministrativa: DocumentosGerenciaAdministrativa[] = [];

export interface DocumentosMantenimiento{
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosMantenimiento: DocumentosMantenimiento[] = [];

export interface DocumentosServiciosgenerales{
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosServiciosGenerales: DocumentosServiciosgenerales[] = [];

export interface DocumentosComercial{
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosComercial: DocumentosComercial[] = [];

export interface DocumentosContabilidad {
  fecha : string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosContabilidad: DocumentosContabilidad[] = [];

export interface DocumentosImportaciones {
  fecha : string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosImportaciones: DocumentosImportaciones[] = [];

export interface DocumentosSig{
  fecha : string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosSig: DocumentosSig[] = [];

export interface DocumentosTalento_Humano {
  fecha: string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosTalento_Humano: DocumentosTalento_Humano[] = [];

export interface DocumentosTesoreria{
  fecha : string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosTesoreria: DocumentosTesoreria[] = [];

export interface DocumentosTi{
  fecha : string;
  nombre: string;
  area : string;
  url: string;
  download: string;
}

const documentosTi: DocumentosTi[] = [];

