<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PermissionsTableSeeder extends Seeder
{
  public function run()
  {
    $timestamp = Carbon::now();

    DB::table('permissions')->insert([
      [
        'name' => 'manage roles',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage permissions',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage classes',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage subjects',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage semesters',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage articles',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage news',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage settings',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage sitemap',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage calendar',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage Categories',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage users',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage test',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage redis',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage security',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ],
      [
        'name' => 'manage files',
        'guard_name' => 'sanctum',
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
      ]
    ]);
  }
}
