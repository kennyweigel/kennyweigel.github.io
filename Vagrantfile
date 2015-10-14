# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "192.168.33.10"
  # config.vm.network :forwarded_port, host: 4000, guest: 4000
  config.vm.synced_folder ".", "/home/vagrant", :mount_options => ["dmode=777", "fmode=666"]
  config.vm.provision :shell, path: "provision.sh"
end
