@php
$configData = Helper::appClasses();
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
@endphp

@extends('layouts/layoutMaster')

@section('title', 'Draft Messages')

@section('content')
<div class="container-fluid mt-4">
 

    <!-- Header Section -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h4><i class="ri-edit-2-line me-2"></i>Draft Messages</h4>
        <div class="input-group w-50">
            <input type="text" class="form-control" placeholder="Search drafts">
            <button class="btn btn-outline-secondary" type="button"><i class="ri-search-line"></i></button>
        </div>
    </div>

    <!-- Toolbar Section -->
    <div class="d-flex justify-content-between mb-3">
        <div class="d-flex align-items-center">
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="checkAll">
                <label class="form-check-label" for="checkAll"></label>
            </div>
            <button class="btn btn-sm btn-outline-danger"><i class="ri-delete-bin-line me-1"></i>Delete Selected</button>
        </div>
    </div>

    <!-- Draft Messages List -->
    <div class="table-responsive">
        <table class="table table-hover align-middle">
            <tbody>
                @foreach ($draftMessages as $message)
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            @php
                                $senderAvatar = $message->sender->avatar && Storage::exists('public/' . $message->sender->avatar)
                                    ? asset('storage/' . $message->sender->avatar)
                                    : asset('assets/img/avatars/default-avatar.png');
                            @endphp
                            <img src="{{ $senderAvatar }}" alt="Avatar" class="rounded-circle me-3" width="50" height="50">
                            <div>
                                <h6 class="mb-0"><a href="{{ route('messages.edit', $message->id) }}">{{ $message->subject }}</a></h6>
                                <small>{{ Str::limit($message->body, 50) }}</small>
                            </div>
                        </div>
                    </td>
                    <td class="text-end">
                        <small class="text-muted">{{ $message->created_at->diffForHumans() }}</small>
                        <div class="btn-group ms-2">
                            <button class="btn btn-sm btn-outline-primary"><i class="ri-mail-line"></i></button>
                            <button class="btn btn-sm btn-outline-danger"><i class="ri-delete-bin-line"></i></button>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
