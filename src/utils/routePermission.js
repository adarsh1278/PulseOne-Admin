

const Permission = {
    '^/login$': ['admin', 'doctor', 'patient', 'superadmin'],
    '^/dashboard$': ['admin', 'manager'],
    '^/profile$': ['admin', 'doctor', 'patient'],
    '^/patients$': ['admin', 'doctor', 'nurse'],
    '^/patients/add$': ['admin', 'doctor'],
    '^/appointments$': ['admin', 'doctor', 'reception'],
    '^/settings$': ['admin'],
    '^/reports$': ['admin', 'manager', 'analyst'],
    '^/prescriptions$': ['doctor', 'pharmacist'],
    '^/billing$': ['admin', 'accountant'],

    
    '^/patients/[^/]+$': ['admin', 'doctor', 'nurse'],
    '^/tenant/[^/]+/dashboard$': ['admin', 'manager'],
    '^/[0-9]+$': ['admin', 'doctor', 'patient'],            // matches /7934
    '^/[0-9]+/dashboard$': ['admin', 'manager'],            // matches /8984/dashboard
};



export function checkPermission(route, userRole) {
    if (!route || !userRole) return false;

    for (const pattern in Permission) {
        const regex = new RegExp(pattern);
        if (regex.test(route)) {
            const allowedRoles = Permission[pattern];
            return allowedRoles.includes(String(userRole));
        }
    }

    return false;
}




export default Permission;