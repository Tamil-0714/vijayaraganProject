create database event_mangement;

create table facultyCred(
    id varchar(16) primary key, --Example : 15fcs01 -> year 2015 Faculty Computer science 01  
    pass varchar(255) not null -- Encrypted using SHA256 alog.
);

-- example values 
insert into facultyCred(id,pass) values("15FCS01","$2a$12$r8aiswfsA98L0vhdUhYPGOo/WyV16R/c1YXgEpcQR1MXTkZMxdVLO"); -- admin@123
insert into facultyCred(id,pass) values("15FCS02","$2a$12$XmbhYXwVbMluDx6KPY5uKuyk2/fTAFv4iBB76If31SmeqjTwhAXY6"); -- chocho_79

select * from facultyCred where id = ?;