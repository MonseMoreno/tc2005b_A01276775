INSERT INTO `Empleados` (`idEmpleado`,`Nombre` ,`tipoTurno`,`Correo`) VALUES
(1,Pedro,0,ppedro@natgas.com.mx),
(2,Emilio,0,eemilio@natgas.com.mx),
(3,Regina,0,rregina@natgas.com.mx),
(4,Andrés,0,aandres@natgas.com.mx),
(5,Juan ,0,jjuan@natgas.com.mx),
(6,Jose,0,jjose@natgas.com.mx),
(7,Justino,0,jjustino@natgas.com.mx),
(8,Ramona,0,rramona@natgas.com.mx),
(9,Monse,0,mmonse@natgas.com.mx),
(10,Guadalupe,0,gguadalupe@natgas.com.mx),
(11,Leonardo,1,leo0ramolo@natgas.com.mx),
(12,Alan,1,aalan@natgas.com.mx),
(13,Monse ,1,mmonsee1@natgas.com.mx),
(14,Felix,1,felixg@natgas.com.mx),
(15,Diego,1,ddiegoo@natgas.com.mx),
(16,Santiago,1,santilb@natgas.com.mx),
(17,Enrique,1,Enriquex@natgas.com.mx),
(18,Elvira,1,Evlira@nat),
(19,Alejandro,1,Ale_jandro@natgas.com.mx),
(20,Monica,1,MonicaAPW@natgas.com.mx);

INSERT INTO `Actividad` (`idActvidad` , `fecha`,`NumHoras`,`DescripcionActividad`,`idProyecto`) VALUES
(1,05/09/2022,7,Diseño de proyecto Oasis,1),
(2,06/09/2022,9,Implementación de recursos,NULL),
(3,07/09/2022,2,Desarrollo de proyecto Altair,2),
(4,12/09/2022,2,Junta de proyecto Oasis,1),
(5,13/09/2022,2,Desarrollo de proyecto Oasis,1),
(6,14/09/2022,5,Desarrollo de caso de uso para Oasis,1),
(7,19/09/2022,1,Desarrollo de función web para Pry,3),
(8,20/09/2022,7,Desarrollo de proyecto Altair,2),
(9,21/09/2022,4,Desarrollo de proyecto Altair,2),
(10,26/09/2022,3,Desarrollo de proyecto Pyro,4),
(11,27/09/2022,1,Junta de consejo de departamento,NULL),
(12,28/09/2022,4,Desarrollo de proyecto Altair,2),
(13,03/10/2022,7,Desarrollo de proyecto Oasis,1),
(14,04/10/2022,9,Junta de reasignaciones en proyecto Pyro,4),
(15,05/10/2022,3,Reunión de consejo de departamento,NULL),
(16,10/10/2022,4,Desarrollo de función web para Pry,3),
(17,11/10/2022,1,Desarrollo de función web para Pry,3),
(18,12/10/2022,3,Diseño de proyecto para Pyro,3),
(19,17/10/2022,3,Junta con colaboradores,NULL),
(20,18/10/2022,6,Entrega de documentaciones del departamento,NULL);

INSERT INTO `Proyecto` (`idProyecto`,`Nombre`,`Descripcion`,`fecha_I`) VALUES
(1,Oasis,Web app en react para fundaciÃ³n Oasis,01/07/2022),
(2,Altair,Web app en react para fundaciÃ³n Altair,01/08/2022),
(3,Pry,Web app en react para fundaciÃ³n Pry,01/09/2022),
(4,Pyro,Web app en react para fundaciÃ³n Pyro,01/10/2022);


INSERT INTO `Registra` (`idEmpleado` ,`Correo` ,`idActividad` ,`fecha`) VALUES
(1,ppedro@natgas.com.mx,1,05/09/2022),
(2,eemilio@natgas.com.mx,2,06/09/2022),
(3,rregina@natgas.com.mx,3,07/09/2022),
(4,aandres@natgas.com.mx,4,12/09/2022),
(5,jjuan@natgas.com.mx,5,13/09/2022),
(6,jjose@natgas.com.mx,6,14/09/2022),
(7,jjustino@natgas.com.mx,7,19/09/2022),
(8,rramona@natgas.com.mx,8,20/09/2022),
(9,mmonse@natgas.com.mx,9,21/09/2022),
(10,gguadalupe@natgas.com.mx,10,26/09/2022),
(11,leo0ramolo@natgas.com.mx,11,27/09/2022),
(12,aalan@natgas.com.mx,12,28/09/2022),
(13,mmonsee1@natgas.com.mx,13,03/10/2022),
(14,felixg@natgas.com.mx,14,04/10/2022),
(15,ddiegoo@natgas.com.mx,15,05/10/2022),
(16,santilb@natgas.com.mx,16,10/10/2022),
(17,Enriquex@natgas.com.mx,17,11/10/2022),
(18,Evlira@nat,18,12/10/2022),
(19,Ale_jandro@natgas.com.mx,19,17/10/2022),
(20,MonicaAPW@natgas.com.mx,20,18/10/2022);


INSERT INTO `Variables`(`fecha`, `HorasTiempo`,`Completo`, `HorasTiempoMedio`,`Coeficienteefectividad`,`horasVacacion`) VALUES
(15/08/22,7,4,0.85,0);

INSERT INTO `Reporte` (`fechaCorte`) VALUES 
(08/09/22),
(16/09/22),
(23/09/22),
(30/09/22),
(07/10/22),
(14/10/22),
(21/10/22);
