create database products_db;

create table products (
id serial primary key,
name varchar(100) not null,
description varchar(100) not null,
price numeric(10, 2) not null default 0,
stock int not null default 0
);