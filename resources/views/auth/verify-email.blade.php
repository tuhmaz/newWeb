@php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
$configData = Helper::appClasses();
$customizerHidden = 'customizer-hide';
$configData = Helper::appClasses();
@endphp

@extends('layouts/blankLayout')

@section('title', 'Verify Email')

@section('page-style')
<!-- Page -->
@vite('resources/assets/vendor/scss/pages/page-auth.scss')
@endsection

@section('content')
<div class="authentication-wrapper authentication-cover">
  <!-- Logo -->
  <a href="{{url('/')}}" class="app-brand auth-cover-brand">
    <span class="app-brand-logo edu"><img src="{{ asset('storage/' . config('settings.site_logo')) }}" alt="LogoWebsite" style="max-width: 20px; height: auto;"></span>
    <span class="app-brand-text edu text-heading fw-bold">{{config('settings.site_name')}}</span>
  </a>
  <!-- /Logo -->
  <div class="authentication-inner row m-0">

    <!-- /Left Text -->
    <div class="d-none d-lg-flex col-lg-8 p-0">
      <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
        <img src="{{ asset('assets/img/illustrations/auth-verify-email-illustration-'.$configData['style'].'.png') }}" alt="auth-verify-email-cover" class="my-5 auth-illustration" data-app-light-img="illustrations/auth-verify-email-illustration-light.webp" data-app-dark-img="illustrations/auth-verify-email-illustration-dark.webp">

        <img src="{{ asset('assets/img/illustrations/bg-shape-image-'.$configData['style'].'.png') }}" alt="auth-verify-email-cover" class="platform-bg" data-app-light-img="illustrations/bg-shape-image-light.webp" data-app-dark-img="illustrations/bg-shape-image-dark.webp">
      </div>
    </div>
    <!-- /Left Text -->

    <!--  Verify email -->
    <div class="d-flex col-12 col-lg-4 align-items-center authentication-bg p-6 p-sm-12">
      <div class="w-px-400 mx-auto mt-12 mt-5">
        <h4 class="mb-1">{{ __('verify_email_title') }}</h4>
        @if (session('status') == 'verification-link-sent')
        <div class="alert alert-success" role="alert">
          <div class="alert-body">
          {{ __('A new verification link has been sent to the email address you provided during registration.') }}
          </div>
        </div>
        @endif
        <p class="text-start mb-0">
          {{ __('Account activation link sent to your email address: ') }}<span class="h6">{{Auth::user()->email}}</span> {{ __('Please follow the link inside to continue.') }}
        </p>
        <div class="mt-6 d-flex flex-column gap-2">
          <form method="POST" action="{{ route('verification.send') }}">
            @csrf
            <button type="submit" class="w-100 btn btn-label-secondary">{{ __('request_another_link') }}</button>
          </form>

          <form method="POST" action="{{route('logout')}}">
            @csrf
            <button type="submit" class="w-100 btn btn-danger">{{ __('logout') }}</button>
          </form>
        </div>
      </div>
    </div>
    <!-- / Verify email -->
  </div>
</div>
@endsection
