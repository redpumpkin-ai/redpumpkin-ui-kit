import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Badge,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Alert,
    Separator,
    SidebarProvider,
    SidebarBody,
    SidebarBodyHeader,
    SidebarBodyContent,
    SidebarBodyWrapper,
} from "@/lib/main";

import { colors } from "@/lib/utils/color";

import { AppSidebar } from "./sidebar";

function Section({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <Separator />
            <div className="flex flex-wrap items-center gap-4">{children}</div>
        </section>
    )
}

export default function App() {
    return (
        <SidebarProvider>
            <SidebarBody>
                <AppSidebar />
                <SidebarBodyContent>
                    <SidebarBodyHeader>
                        Header
                    </SidebarBodyHeader>
                    <SidebarBodyWrapper>
                        <MainContent />
                    </SidebarBodyWrapper>
                </SidebarBodyContent>
            </SidebarBody>
        </SidebarProvider>
    );
}

function MainContent() {
    return (
        <div className="bg-background-default text-foreground min-h-screen p-8 font-sans">
            <div className="mx-auto max-w-4xl space-y-12">
                <header className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">
                        RedPumpkin UI Kit
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive component library for building modern web
                        applications.
                    </p>
                </header>
                <Section title="Buttons">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                        <span className="sr-only">Icon</span>
                        <div className="h-4 w-4 rounded-full bg-current" />
                    </Button>
                </Section>

                <Section title="Badges">
                    <Badge color={colors.green}>Success</Badge>
                    <Badge color={colors.red}>Failed</Badge>
                    <Badge color={colors.orange}>Warning</Badge>
                    <Badge color={colors.blue}>Info</Badge>
                </Section>

                <Section title="Inputs">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
                </div>
                </Section>

                <Section title="Cards">
                <Card className="w-[350px]">
                    <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground text-sm">
                        Your new project will be deployed to Vercel.
                    </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                    </CardFooter>
                </Card>
                </Section>

                <Section title="Avatars">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                </Section>

                <Section title="Alerts">
                    <Alert variant="success" onClose={() => {}}>
                        Success alert
                    </Alert>
                    <Alert variant="danger" onClose={() => {}}>
                        Danger alert
                    </Alert>
                    <Alert variant="warning" onClose={() => {}}>
                        Warning alert
                    </Alert>
                    <Alert variant="info" onClose={() => {}}>
                        Info alert
                    </Alert>
                </Section>
            </div>
        </div>
    );
}