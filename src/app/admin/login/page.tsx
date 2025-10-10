import { LoginForm } from './login-form';
import { Shield } from 'lucide-react';
import RootAdminLayout from '../layout';


export default function AdminLoginPage() {
  return (
    <RootAdminLayout>
        <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="w-full max-w-sm">
            <div className="flex flex-col items-center text-center mb-6">
                <div className="p-3 bg-primary rounded-full mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold">Admin Access</h1>
                <p className="text-muted-foreground">Please enter the password to continue.</p>
            </div>
            <LoginForm />
        </div>
        </div>
    </RootAdminLayout>
  );
}
