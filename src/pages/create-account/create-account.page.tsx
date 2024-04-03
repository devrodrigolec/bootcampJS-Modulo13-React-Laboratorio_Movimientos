import { AppLayout } from "@/layout";
import { CreateAccountHeaderComponent } from "./components";
import classes from './create-account.page.module.css'
import { CreateAccountFormComponent } from "./components/create-account-form.component";


export const CreateAccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
      <CreateAccountHeaderComponent/>
      <CreateAccountFormComponent/>
      </div>
    </AppLayout>
  );
};
