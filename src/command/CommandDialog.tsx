import * as React from 'react';
import { Command, Dialog, DialogContent } from '../index';
import { Command as CommandPrimitive } from 'cmdk';

interface ICommandDialogProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    onClose?: () => void;
}

const CommandDialog = ({
    children,
    onClose,
    ...props
}: ICommandDialogProps) => {
    return (
        <Dialog>
            <DialogContent
                className="overflow-hidden p-0"
                onClose={onClose}
                {...props}>
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[#6e7781] dark:[&_[cmdk-group-heading]]:text-[#8b99a6] [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
};

CommandDialog.displayName = CommandPrimitive.displayName;

export default CommandDialog;
