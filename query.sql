create table productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT,
    descripcion TEXT
);

select * from productos;

insert into productos(nombre,descripcion) values ("Guido", "Un capo");

update productos set nombre = "Jorge" where nombre = "Guido";





create table provincias(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT,
    poblacion TEXT
);

select * from provincias;

insert into provincias(nombre,poblacion) values ("CABA","3.231.082");
insert into provincias(nombre,poblacion) values ("Buenos Aires", "17.594.428");
insert into provincias(nombre,poblacion) values ("Tierra del Fuego", "126.190");
insert into provincias(nombre,poblacion) values ("Santa Cruz", "272.524");
insert into provincias(nombre,poblacion) values ("Chubut",              "506.668");
insert into provincias(nombre,poblacion) values ("Rio Negro",           "633.374");
insert into provincias(nombre,poblacion) values ("La Pampa",            "316.940");
insert into provincias(nombre,poblacion) values ("Neuquen",             "550.344");
insert into provincias(nombre,poblacion) values ("Mendoza",             "2.001.610");
insert into provincias(nombre,poblacion) values ("San Juan",            "680.427");
insert into provincias(nombre,poblacion) values ("La Rioja",            "331.847");
insert into provincias(nombre,poblacion) values ("Catamarca",           "367.820");
insert into provincias(nombre,poblacion) values ("Tucuman",             "1.950.878");
insert into provincias(nombre,poblacion) values ("Salta",               "1.215.207");
insert into provincias(nombre,poblacion) values ("Jujuy",               "672.260");
insert into provincias(nombre,poblacion) values ("Santiago del Estero", "896.461");
insert into provincias(nombre,poblacion) values ("Chaco",               "1.053.466");
insert into provincias(nombre,poblacion) values ("Formosa",             "527.895");
insert into provincias(nombre,poblacion) values ("Misiones",            "1.097.829");
insert into provincias(nombre,poblacion) values ("Corrientes",          "1.503.338");
insert into provincias(nombre,poblacion) values ("Entre Rios",          "1.236.300");
insert into provincias(nombre,poblacion) values ("Santa Fe",            "3.600.736");
insert into provincias(nombre,poblacion) values ("Cordoba",             "3.898.825");
insert into provincias(nombre,poblacion) values ("San Luis",            "461.588");

update provincias set nombre = "Ciudad Autonoma de Buenos Aires" where nombre = "CABA";

