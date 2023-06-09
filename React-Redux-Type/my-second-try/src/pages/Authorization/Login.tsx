import {Box, Container, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {object, string, TypeOf} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import FormInput from '../../components/FormInput';
import {useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useLoginUserMutation} from '../../store/services/authApi';
import {LoadingButton as _LoadingButton} from '@mui/lab';
import {toast} from 'react-toastify';

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;

const loginSchema = object({
    email: string()
        .min(1, 'Email address is required')
        .email('Email Address is invalid'),
    password: string()
        .min(1, 'Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
});

export type LoginInput = TypeOf<typeof loginSchema>;

export const LoginPage = () => {
    const methods = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    // ? Calling the Register Mutation
    const [loginUser,
        {
            isLoading,
            isSuccess,
            error,
            isError
        }] = useLoginUserMutation();

    const navigate = useNavigate();
    const location = useLocation();

    const from = ((location.state as any)?.from.pathname as string) || '/profile';

    const {
        reset,
        handleSubmit,
        formState: {isSubmitSuccessful},
    } = methods;

    useEffect(() => {
        if (isSuccess) {
            toast.success('You successfully logged in');
            navigate(from);
        }
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) =>
                    toast.error(el.message, {
                        position: 'top-right',
                    })
                );
            } else {
                toast.error((error as any).data.message, {
                    position: 'top-right',
                });
            }
        }
    }, [isLoading]);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
        // ? Executing the RegisterUser Mutation
        loginUser(values);
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#2363eb',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    textAlign='center'
                    component='h1'
                    sx={{
                        color: '#f9d13e',
                        fontSize: {xs: '2rem', md: '3rem'},
                        fontWeight: 600,
                        mb: 2,
                        letterSpacing: 1,
                    }}
                >
                    Welcome to my sait!
                </Typography>
                <Typography component='h2' sx={{color: '#e5e7eb', mb: 2}}>
                    Enter To Your Account To Get Started!
                </Typography>

                {/* Когда вы включаете пользовательский FormInputкомпонент в форму, вам необходимо предоставить ему
                 контекст формы, используя FormProvider*/}
                <FormProvider {...methods}>
                    <Box
                        component='form'
                        onSubmit={handleSubmit(onSubmitHandler)}
                        noValidate
                        autoComplete='off'
                        maxWidth='27rem'
                        width='100%'
                        sx={{
                            backgroundColor: '#e5e7eb',
                            p: {xs: '1rem', sm: '2rem'},
                            borderRadius: 2,
                        }}
                    >
                        <FormInput name='email' label='Email Address' type='email'/>
                        <FormInput name='password' label='Password' type='password'/>
                        <Typography sx={{fontSize: '0.9rem', mb: '1rem'}}>
                            Didn't you have an account?{' '}
                            <LinkItem to='/register'>Registration Here</LinkItem>
                        </Typography>

                        <LoadingButton
                            variant='contained'
                            sx={{mt: 1}}
                            fullWidth
                            disableElevation
                            type='submit'
                            loading={isLoading}
                        >
                            Enter
                        </LoadingButton>
                    </Box>
                </FormProvider>
            </Box>
        </Container>
    );
};